const User = require("../models/user");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require("passport-local");
const config = require("./config");
const jwt = require('jsonwebtoken');
require('cookie-parser');

// passport Local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      // Find the user with the email
      User.findOne({ email: email }, (err, user) => {
        // If an error occurred, return response with the status 500
        if (err) {
          return done(null, false, {
            message: { email: "is invalid" },
          });
        }

        if (!user) {              // If the user does not exist, return null with the error message
          return done(null, false, {
            message: { email: "is invalid" },
          });
        }
        else {
          let token = user.genToken(user);
          console.log('token in the local strategy: ' + token);
          return done(null, user);  // If the user exists, return the user
        }
      });
    }
  )
);

const cookieExtractor = 
function (req) {
  let token = null;
  console.log('in cookie extractor!' + req.cookies.token);
  if (req && req.cookies && req.cookies.token) {
    jwt.verify(req.cookies.token, config.JWT_SECRET, function(err, decoded) {
      if (!err) {
        token = req.cookies.token;
      } 
    });
  }
  return token;
};

// passport jwt strategy
passport.use(
  new JWTStrategy(
    {
      // Get the token from the cookie
      jwtFromRequest: cookieExtractor,
      secretOrKey: config.JWT_SECRET,
    },
    function (jwtPayload, done) {
      console.log("looking for the user with token: " + JSON.stringify(jwtPayload));
      console.log("user ID: " + jwtPayload.id);

      // jwt.verify(token, req.app.get('your-secret'), function(err, decoded) {
      //   if (err) throw new Error(err) // Manage different errors here (Expired, untrusted...)
      //   req.auth = decoded // If no error, token info is returned in 'decoded'
      //   next()
      // });

      // // If the token expired
      // if (Date.now() >= new Date(jwtPayload.exp) * 1000) {
      //   return false;
      // }

      // Find the user by id from jwt token
      return User.findById(jwtPayload.id)
        .then((user) => {             // If found
          console.log("user found!" + user);
          return done(null, user);    // Return the user
        })
        .catch((err) => {             // If error occurred
          console.log('error occurred in passport.js');
          return done(err);           // Return the error
        });
    }
  )
);

module.exports = passport;
