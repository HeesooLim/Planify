/*
 * server/models/User.js
 */
"use strict";

const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 5;
const timestamps = require("mongoose-timestamp");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

// Schema
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      index: { unique: true },
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tempUuid: {
      type: String,
      required: false,
    },
    expiresAt: {
      type: Date,
    },
    confirmed: {
      type: Boolean,
    },
  },
  { collection: "users" }
);

// Plugins
UserSchema.plugin(timestamps);

// Hash the password before the user information is saved in the database
UserSchema.pre("save", function (next) {
  var user = this;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // Generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // Hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // Override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

// Compare password to hashed password
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compareSync(candidatePassword, this.password, function (err, result) {
    console.log(`compare result: ${result}`);
    return next();
  });
};

UserSchema.methods.setPassword = function (password) {
  // Generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // Hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // Override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
};

// UserSchema.methods.toAuthJSON = function () {
//   return {
//     _id: this._id,
//     email: this.email,
//     token: this.genToken(7),
//   };
// };

UserSchema.methods.genToken = (user) => {
  const today = new Date();
  const expirationDate = new Date();
  // Expires in 20 minutes
  expirationDate.setTime(today.getTime() + 1 * 60 * 1000);

  return jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    config.JWT_SECRET,
    { expiresIn: "20m" }
  );
};

// Model
module.exports = exports = mongoose.model("user", UserSchema);
