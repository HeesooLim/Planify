// Load modules
let http = require("http");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const path = require("path");
const logger = require("./logger")(__filename);
const session = require("express-session");
const passport = require('passport');
require("./config/passport");
require('dotenv').config();

let app = express();
let server = http.createServer(app);

app.options('*', cors()) // include before other routes 
app.use(cors({origin: ['https://planifie-heesoo.herokuapp.com', 'http://localhost:3000'], }));


// Configure middleware
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable("etag");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Configure routes
app.use("/user", require("./routes/userRouter"));
app.use("/plan", passport.authenticate('jwt', { session: false }), require("./routes/planRouter"));

// Connect to DB
mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info("DB connection succesful"))
  .catch((err) => logger.error(err));


app.use(express.static(__dirname + "./../client/dist/client"));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +
    './../client/dist/client/index.html'));
});

// set port
const port = process.env.PORT || 8080; 
server.listen(port, () => {
  console.log(`Port listening on ${port}`)
})

exports = module.exports = app;
