var express = require('express');
var app=express();
var itemDB = require('../models/itemDB');

app.set('view engine','ejs');
app.use('/resources',express.static('resources'));

app.get('/',function(req,res){
  res.render('../views/index');
});

app.get('/index',function(req,res){
  res.render('../views/index');
});

app.get('/about',function(req,res){
  res.render('../views/about');
});

app.get('/categories',function(req,res){
  var catalogCategory = itemDB.getCategories();
  var items= itemDB.getItems();
  res.render('../views/categories',{items:items,category:catalogCategory});
});

app.get('/categories/:catalogCategory',function(req,res){
  var catalogCategory1 =[];
  var reqCategory = req.params.catalogCategory;
  if(reqCategory != "undefined"){
    if(itemDB.getCategories().includes(reqCategory)){
      catalogCategory1.push(reqCategory);
      var items = itemDB.getCategory(reqCategory);
      res.render('../views/categories',{items:items,category:catalogCategory1});
    }else{
      res.redirect("/categories");
    }
  } else{
    res.redirect("/categories");
  }
});

app.get('/contact',function(req,res){
  res.render('../views/contact');
});

app.get('/item',function(req,res){
  res.redirect("/categories");
});

app.get('/item/:itemCode',function(req,res){
  var itemId = parseInt(req.params.itemCode);
  if(itemId != undefined && typeof itemId == "number"){
    var item = itemDB.getItem(itemId);
    if(item!=undefined){
      res.render('../views/item',{item:item});
    } else{
      res.redirect("/categories");
    }
  } else{
    res.redirect("/categories");
  }
});

app.get('/mySwaps',function(req,res){
  res.render('../views/mySwaps');
});

app.get('/myItems',function(req,res){
  res.render('../views/myItems');
});

app.get('/swap/:itemCode',function(req,res){
  if(req.params.itemCode!=undefined){
  var itemId = parseInt(req.params.itemCode);
  var item = itemDB.getItem(itemId);
  if(item !=undefined){
  res.render('../views/swap',{item:item});
} else {
  res.redirect("/categories");
}
} else {
  res.redirect("/categories");
}
});

app.get('*', function(req, res){
  res.send('404 ERROR : OOPS ! Page Not Found');
});

app.listen(8080);
