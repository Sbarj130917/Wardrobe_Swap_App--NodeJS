var express = require('express');
var bodyParser = require('body-parser');
var app=express();

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.set('view engine','ejs');
app.use('/stuffs',express.static('stuffs'));

app.get('/',function(req,res){
  res.render('index');
});

app.get('/contact',function(req,res){
  res.render('contact',{qs:req.query});
});

app.post('/contact',urlencodedParser, function(req,res){
  console.log(req.body);
  res.render('contact-success',{data:req.body});
});

app.get('/profile/:name',function(req,res){
  var data = {age:26, job:'Data Scientist',hobbies:['Reading','Dancing','Sketching']};
  res.render('profile',{person:req.params.name,data:data});
});

app.listen(3000);
