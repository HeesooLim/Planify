const nodemailer = require("nodemailer");
const passport = require("../config/passport");
const User = require("../models/user");
const Utils = require("../utils/utils");
const bcrypt = require("bcrypt");
const { auth, isTokenValid } = require("../routes/auth");
const http = require("http");
const config = require("../config/config");
require("cookie-parser");

exports.isAuthenticated = function (req, res, next) {
  passport.authenticate("jwt", function (err, user, info) {
    if (err || !user) {
      return res.send({ authenticated: false, user: null });
    } else {
      return res.send({ authenticated: true, user: user.firstName });
    }
  })(req, res, next);
};

// Get all users in the database
exports.getUser = function (req, res) {
  // Validate the token and get the decoded value
  let decodedToken = isTokenValid(req);

  if (decodedToken) {
    // Find a user using its id from the parameter
    User.findOne({ _id: decodedToken.id }, (err, data) => {
      console.log("USER: ------" + data);
      // If an error occurred, return response with the status 500
      if (err) return Utils.resStatusMsg(res, 500, "Cannot fetch the data");
      // Otherwise, send the data
      else res.send(data);
    });
  }
  else {
    let user = new User({
      email: '', // User's email
      password: '', // User's password (before hashing)
      firstName: 'there', // User's first name
      lastName: '', // User's last name
      confirmed: false, // Email is not verified at first
    });
    res.send(user);
  }
};

// Get all users in the database
exports.getUserByEmail = async function (req, res) {
  // Find the user
  let user = await User.findOne({ email: req.params.email }).exec();

  // If no user found, return response with the status 404
  if (!user) {
    return res.send(null);
  }
  // Otherwise, send the data
  return res.send(user);
};

// Get a user by id
exports.getDataById = function (req, res) {
  // Find a user using its id from the parameter
  User.findOne({ id: req.params._id }, (err, data) => {
    // If an error occurred, return response with the status 500
    if (err) return Utils.resStatusMsg(res, 500, "Cannot fetch the data");
    // Otherwise, send the data
    else res.send(data);
  });
};

// Add the user to the db collection
exports.addUser = async function (req, res, next) {
  let password = req.body.password;
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;

  let emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // Password does not contain email, first name or last name
  let rule1 =
    !Utils.strIncludesStr(password, email, 4) &&
    !Utils.strIncludesStr(password, firstname, 4) &&
    !Utils.strIncludesStr(password, lastname, 4);
  // Password length is between 8 and 15
  let rule2 = password.length >= 8 && password.length <= 15;
  // Password contains uppercase, lowercase and number
  let rule3 =
    password.match(/(?=.{8,15}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g) != null;
  // Password contains at least 1 special character
  let rule4 = password.match(/(?=.*[!@#$%^&*]).*$/g) != null;

  let isFirstNameValid = firstname != null && firstname !== "";
  let isLastNameValid = lastname != null && lastname !== "";
  let isEmailValid = email != null && email != "" && email.match(emailRegex);
  let isPasswordValid = rule1 && rule2 && rule3 && rule4;

  // If any data is wrong, return the response with status 404
  if (
    !isPasswordValid ||
    !isFirstNameValid ||
    !isLastNameValid ||
    !isEmailValid
  )
    return Utils.resStatusMsg(res, 400, "Data invalid");

  // Create a new user using the body
  let user = new User({
    email: email, // User's email
    password: password, // User's password (before hashing)
    firstName: firstname, // User's first name
    lastName: lastname, // User's last name
    confirmed: false, // Email is not verified at first
    tempUuid: Utils.getUuid(), // Temporary email verification uuid
    expiresAt: Utils.addMinutesToDate(new Date(), 30),
  });

  // Check if any user with the email exists
  let foundUser = await User.findOne({ email: req.body.email }).exec();

  console.log(foundUser);
  // If exists, return response with the status 403
  if (foundUser) return Utils.resStatusMsg(res, 403, "Email is already in use");
  else {
    // Otherwise, insert the user into the database
    await user.save((err) => {
      // If error occurred, return response with the status 500
      if (err) return Utils.resStatusMsg(res, 500, "Cannot save the data");
      else {
        // Send verification email
        sendVerification(user);
        // Return response with the status 200
        return res.status(200).json({ message: "success!" });
      }
    });
  }
};

// Authenticate the user when trying to login
exports.tryLoginByEmailAndPw = function (req, res, next) {
  // if email does not exist, return response with the status 401
  if (!req.body.email) return Utils.resStatusMsg(res, 401, "email is required");

  // If password does not exist, return response with the status 401
  if (!req.body.password)
    return Utils.resStatusMsg(res, 401, "password is required");

  // Authenticate the user using the passport
  passport.authenticate(
    "local", // Local strategy
    { session: false }, // Disable the session
    (err, user, info) => {
      if (err) return next(err);

      // Check if the user exists
      if (!user) return Utils.resStatusMsg(res, 401, "User does not exist");
      // Check if the email is verified
      if (!user.confirmed)
        return Utils.resStatusMsg(res, 403, "email is not verified");

      try {
        // Load hash from your password DB.
        bcrypt
          .compare(req.body.password, user.password)
          .then(function (result) {
            if (!result) {
              return Utils.resStatusMsg(res, 401, "password is invalid");
            } else {
              console.log("found user when login: " + user.email);
              // Secure used during the production environment with https
              res.cookie("token", user.genToken(user), {
                maxAge: 20 * 60 * 1000,
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
              });
              res.send(user);
            }
          });
      } catch (e) {
        // If an error occurred, return response with the status 500
        return Utils.resStatusMsg(res, 500, "Internal server error");
      }
    }
  )(req, res, next);
};

// Verify the email
exports.verifyEmail = async function (req, res, next) {
  // Find the user with the email
  let user = await User.findOne({ email: req.body.email }).exec();

  // If user does not exist, return response with status 400
  if (!user) return Utils.resStatusMsg(res, 400, "Invalid user");
  let now = new Date(); // Datetime now
  // If the user is already confirmed
  if (user.confirmed) return Utils.resStatusMsg(res, 200, "Already verified");
  // If the uuid is expired
  if (user.expiresAt < now) return res.json({ message: "Url is expired." });
  // If the uuid is invalid
  if (req.body.uuid !== user.tempUuid)
    return Utils.resStatusMsg(res, 400, "Invalid Url");

  user.confirmed = true; // Set the user confirmed field to true
  await user.save(); // Save the change
  console.log("user saved: " + user);
  return res.redirect("http://localhost:4200/login"); // Return the updated user
};

// Verify the email
exports.verifyEmailGet = async function (req, res, next) {
  // Find the user with the email
  let user = await User.findOne({ email: req.params.email }).exec();

  // If user does not exist, return response with status 400
  if (!user) return Utils.resStatusMsg(res, 400, "Invalid user");
  let now = new Date(); // Datetime now
  // If the user is already confirmed
  if (user.confirmed) return Utils.resStatusMsg(res, 200, "Already verified");
  // If the uuid is expired
  if (user.expiresAt < now) return res.json({ message: "Url is expired." });
  // If the uuid is invalid
  if (req.params.uuid !== user.tempUuid)
    return Utils.resStatusMsg(res, 400, "Invalid Url");

  user.confirmed = true; // Set the user confirmed field to true
  await user.save(); // Save the change
  console.log("user saved: " + user);
  return res.redirect("http://localhost:4200/login"); // Return the updated user
};

// Send the verification email to the user
async function sendVerification(user) {
  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // True for 465, false for other ports
    auth: {
      user: "planifie.service@gmail.com",
      pass: "kJL#97%lJd$u",
    },
  });
  let mailOptions = {
    from: '"Planifie" <planifie.service@gmail.com>', // Sender
    to: user.email, // receiver
    subject: "[Planifie] Verification email", // Subject line
    html: `
      <a href='http://localhost:4200/user/verify/${user.email}/${user.tempUuid}'>Veryfy link</a>
      <form action='http://localhost:3000/user/verify'>
        <input type='hidden' name='uuid' value='${user.tempUuid}'>
        <input type='hidden' name='email' value='${user.email}'>
        <button type='submit'>Verify</button>
      </form>
    `, // html body
  };

  // Send mail with the transporter object
  await transporter.sendMail(mailOptions, (err, data) => {
    if (err) return console.log(err);
    console.log("Message sent: %s", data.messageId);
  });
}

exports.logout = function (req, res, next) {
  passport.authenticate("jwt", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return Utils.resStatusMsg(res, 500, "User not found");
    }
    res.clearCookie("token");
    // res.cookie('token', user.genToken(user), {maxAge: 20 * 60 * 1000, httpOnly: true,
    //   secure: process.env.NODE_ENV === "production"});
    return Utils.resStatusMsg(res, 200, "Successfully logged out.");
  })(req, res, next);
};
