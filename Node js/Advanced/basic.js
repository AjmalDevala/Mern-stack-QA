const createError = require("http-errors"); //Its help to HTTP error objects with customizable status codes, error messages, and additional properties
const express = require("express"); // minimalist web framework for Node.js
const path = require("path");
const cookieParser = require("cookie-parser"); //Cookie parser is a software library used in web development that helps to parse ( parsing means to analyze or break up something ) and extract cookie data from HTTP requests.
const logger = require("morgan"); //To log requests, errors, and more to the console.
const db = require("./config/connection"); //config db
const session = require("express-session");
// % -Session
// % A session is stored at server side
// % It can store a data ranging between 5mb – 10mb
// % Cookies
// % A cookie is stored at client side
// % It can only store a data of 4kb

db.connect((err) => {
  //check the connection is true or false
  if (err) console.log("connection Error" + err);
  else console.log("db connection succussful!");
});

const userRouter = require("./routes/user"); //check the users
const adminRouter = require("./routes/admin"); //check the admin
const indexRouter = require("./routes/index");
const hbs = require("express-handlebars"); //Handlebars. js is a templating engine similar to the ejs module in node. js, but more powerful and simple to use. It ensures minimum templating and is a logicless engine that keeps the view and the code separated. It can be used with express as the hbs module, available through npm.
const app = express(); //Assign the express into app

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layout/",
    partialsDir: __dirname + "/views/partials",
  })
);

app.use(logger("dev")); //it work on the development
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// session

app.use(
  session({
    secret: "secret_key",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 360000 },
  })
);

// back no cach

app.use(function (req, res, next) {
  if (!req.user) {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-2");
    res.header("Pragma", "no-cache");
  }
  next();
});

// ROUTER set up usr route and admin route

app.use("/", userRouter);
app.use("/admin", adminRouter);
app.use("/index", indexRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
