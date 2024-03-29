const jwt = require("express-jwt");
const jsonWebToken = require("jsonwebtoken");
require('dotenv').config({path:__dirname+'/./../../.env'});

const getTokenFromHeaders = (req) => {
  // Get request header
  const {
    headers: { authorization },
  } = req;
  if (authorization && authorization.split(" ")[0] === "Bearer") {
    // Return the second element of header (except 'Bearer')
    return authorization.split(" ")[1];
  }
  return null;
};

const getTokenFromCookies = 
function (req) {
  let token = null;
  console.log(req.cookies.token);
  if (req && req.cookies && req.cookies.token) {
      token = req.cookies.token;
  }
  return token;
};

// const auth = {
exports.auth = {
  // Required token
  required: jwt({
    // secret: "We all make them, the difference is what we do after we make the mistake, how we see the mistake - a learning experience or a failure",
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    getToken: getTokenFromCookies,
    algorithms: ["HS256"],
  }),
  // Optional token
  optional: jwt({
    // secret: "We all make them, the difference is what we do after we make the mistake, how we see the mistake - a learning experience or a failure",
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    getToken: getTokenFromCookies,
    credentialsRequired: false,
    algorithms: ["HS256"],
  }),
};

/**
 * Verify the token using the http request and return the Auth object(decoded jwt value) if valid.
 * 
 * @param {*} req Request to extract the jwt token value from the cookie.
 * @returns Decoded jwt object if the token is valid.
 */
exports.isTokenValid = (req) => {
  let token = getTokenFromCookies(req);
  if (token) {
    try {
      const decoded = jsonWebToken.verify(token, process.env.JWT_SECRET);
      if (Date.now() >= decoded.exp * 1000) {
        console.log('Token is expired');
      }
      
      if (decoded) return decoded;
      else return null;
    } catch (e) {
      return null;
    }
  }
};

// module.exports = auth;
