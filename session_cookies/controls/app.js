/* @sbarjaty */

//setup express to use for routing
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session= require('express-session');

var urlencodeParser=bodyParser.urlencoded({extended:false});


//set view engine to EJS
app.set('view engine', 'ejs');

//set the path for static resources to be accessible
app.use('/resources', express.static('resources'));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
  // cookie: { maxAge: 60000 }
}));

/*  illustration of handling a general (root) request
 *  the route definition resposnds by sending a text response
 */
/*
app.get('/', function (req, res) {
  res.send('This is the Student Information home page');
});
*/

/* the following illustrates handling a general (root) request by sending an HTML file
*  this serves as the landing/home page of the application
*  the route definition responds by sending an HTML fille
*/
app.get('/', function (req, res) {
  var path = process.cwd();
  console.log("path from where node was started" + path);
  res.sendFile(path + '/views/index.html');
});

// app.get('/studentInfo*', function (req, res) {
//   console.log('its here');
//   res.render(__dirname + '/../views/main', { student: req.query });
// });

app.get('/studentInfo*', function (request, response) {
  var studentObj = require('./../models/student');

  if(request.session.thestudent){
      response.render('main', { student: request.session.thestudent });
   } else  {
    var path = process.cwd();
    response.sendFile(path + '/views/index.html');
  }
});

app.post('/studentInfo*', urlencodeParser, function (request, response) {
  var studentObj = require('./../models/student');
  var studentReqBody = request.body;
  console.log("student information: ");
  console.log(studentReqBody);
  if (!(studentReqBody.firstName) || !(studentReqBody.lastName) || !(studentReqBody.degree) || !(studentReqBody.program)) {
    var path = process.cwd();
    response.sendFile(path + '/views/index.html');
  }
  else {
    thestudent = studentObj.student(studentReqBody.firstName, studentReqBody.lastName, studentReqBody.degree, studentReqBody.program);
    request.session.thestudent = thestudent;
    response.render('main', { student: thestudent });
  }
});

//start local server and listen on the default HTTP port 8080
app.listen(8080, '127.0.0.1');
