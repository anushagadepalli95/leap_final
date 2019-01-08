var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var nodemailer=require('nodemailer');
var Tasks=require('./routes/users');
var Users=require('./routes/login');
var RetrieveProject=require('./routes/retrieveproject');
var Invoice=require('./routes/invoice');
var MilestoneSd=require('./routes/milestonesd');
var Updateinvoice=require('./routes/updateinvoice');
var Sendmail=require('./routes/sendmail');
var Employeeid=require('./routes/employeeid');
var EmployeeDetails=require('./routes/employeedetails');
var isFM=require('./routes/isFM');
var prodashboard=require('./routes/projectdashboard');
var proexpenditure=require('./routes/proexpenditure');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Tasks',Tasks);
 app.use('/login',Users);
 app.use('/invoice',Invoice);
 app.use('/milestonesd',MilestoneSd);
 app.use('/updateinvoice',Updateinvoice);
 app.use('/sendmail',Sendmail);
 app.use('/employeeid',Employeeid);
 app.use('/employeedetails',EmployeeDetails);
app.use('/retrieveproject',RetrieveProject);
app.use('/isFM',isFM);
app.use('/prodashboard',prodashboard);
app.use('/proexpenditure',proexpenditure);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
