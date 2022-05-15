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
const passport = require('passport');
// require("./config/passport");

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


// handle cors error
// app.server.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });
// app.server.options('*', cors()) // include before other routes
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });
// app.server.use(cors({credentials: true, origin: 'http://localhost:4200'}));

// Load app modules and controllers
app.m = app.models = requireDir(app.dir + "/models", { recurse: true });
app.c = app.controllers = requireDir(app.dir + "/controllers", {
  recurse: true,
});

  // handle cors error
  // app.server.use(cors({ credentials: true, origin: 'http://localhost:3000/user/authenticated' }));
  // app.server.options('*', cors())
  app.server.use(cors({
    credentials: true,
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
    origin: ['https://fast-shore-66820.herokuapp.com', 'http://localhost:4200']
  }));
  // app.server.options('*', cors());
  // app.server.use(function (req, res, next) {
  //     res.header('Access-Control-Allow-Origin', '*');
  //     res.header("Access-Control-Allow-Credentials", "true");
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With"
  //     );
  //     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  //     next();
  //   });

// Configure middleware
app.server.use(cookieParser());
app.server.set("view engine", "pug");
app.server.use(methodOverride());
app.server.use(express.json());
app.server.use(bodyParser.urlencoded({ extended: true }));
app.server.disable("etag");
app.server.use(
  session({
    secret: process.env.SESSION_SECRET,
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
app.router.use("/plan", passport.authenticate('jwt', { session: false }), require("./routes/planRouter"));

// App entrypoint
app.run = function () {
  // Connect to DB
  mongoose.set("useCreateIndex", true);
  mongoose
    .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => logger.info("DB connection succesful"))
    .catch((err) => logger.error(err));

  // Start the server
  this.server.use(this.router);
  this.server.use("/", express.static(app.clientDir));
  // const port = process.env.PORT || 8080; // set our port
  // this.server.set('port', port);
  // this.server.listen(this.server.get('port'), () => logger.info("Server started on port " + port));
  const port = process.env.PORT || 8080; // set our port
  this.server.listen(port, () => logger.info("Server started on port " + port));
};

exports = module.exports = app;
