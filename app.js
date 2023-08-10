var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const handlebars = require("express-handlebars");
const Handlebars = require("handlebars");
const axios = require("axios").default;
var indexRouter = require("./src/routes/index");
var usersRouter = require("./src/routes/users");

var app = express();

// view engine setup
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    layoutsDir: "views/layouts",
    views: "views",
    defaultLayout: "main",
    extname: "hbs",
    partialsDir: "views/_partials",
    helpers: {},
  })
);

app.use(logger("dev"));
app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
// app.use(methodOveride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

const PORT = process.env.ACCESS_PORT || 5800;
app.listen(PORT, function () {
  console.log(`NIGSIMS is running on PORT ${PORT}`);
});

// axios.interceptors.request.use(
//   (request) => {
//     request.headers.ContentType = "application/json";
//     request.headers.Accept = "application/json";
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     return error.response.data;
//   }
// );

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send(err);
//   // res.render("error");
// });

module.exports = app;
