// Load modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const methodOverride = require("method-override");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const requireDir = require("require-dir");
const rfs = require("rotating-file-stream");
const logger = require("./logger")(__filename);
const session = require("express-session");
const configVars = require('./config/config');
const passport = require('passport');
require("./config/passport");

// Load configuration
const config = requireDir("./config/", { recurse: true });

mongoose.set("useFindAndModify", false);

// Create an app
const app = {
  config: config,
  dir: __dirname,
  server: express(),
  router: express.Router(),
  clientDir: path.join(__dirname, "./../client/dist/client"),
  logger: logger,
};

app.server.use(cors({credentials: true, origin: 'http://localhost:4200'}));

// Load app modules and controllers
app.m = app.models = requireDir(app.dir + "/models", { recurse: true });
app.c = app.controllers = requireDir(app.dir + "/controllers", {
  recurse: true,
});

// Configure middleware
app.server.use(cookieParser());
app.server.set("view engine", "pug");
app.server.use(methodOverride());
app.server.use(express.json());
app.server.use(bodyParser.urlencoded({ extended: true }));
app.server.disable("etag");
app.server.use(
  session({
    secret: configVars.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Configure HTTP logging
const logDirectory = path.join(__dirname, "logs");
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
const accessLogStream = rfs("access.log", {
  interval: "1d",
  path: logDirectory,
});
app.server.use(morgan("combined", { stream: accessLogStream }));
app.server.use(morgan("dev"));

// Configure routes
app.router.use("/user", require("./routes/userRouter"));
app.router.use("/plan", passport.authenticate('jwt', {session: false}), require("./routes/planRouter"));

// App entrypoint
app.run = function () {
  // Connect to DB
  mongoose.set("useCreateIndex", true);
  mongoose
    .connect(configVars.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => logger.info("DB connection succesful"))
    .catch((err) => logger.error(err));

  // Start the server
  this.server.use(this.router);
  this.server.use("/", express.static(app.clientDir));
  const port = configVars.PORT || 8080; // set our port
  this.server.listen(port, () => logger.info("Server started on port " + port));
};

exports = module.exports = app;
