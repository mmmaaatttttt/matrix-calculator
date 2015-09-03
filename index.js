var express = require('express'),
  app = express();

app.set('view engine', 'ejs');  

app.get("/", function(req, res) {
  res.render("index", {
    op: undefined
  });
});

function MathOp(string, method) {
  this.string = string;
  this.method = method;
}

var doMath = {
  "add": new MathOp("+", function(a,b) {return a+b;}),
  "sub": new MathOp("-", function(a,b) {return a-b;}),
  "mult": new MathOp("\xD7", function(a,b) {return a*b;}),
  "div": new MathOp("\xF7", function(a,b) {return a/b;})
}

app.get('/:operation/:num1/:num2', function(req, res) {

  res.render("index", {
    result: doMath[req.params.operation].method(parseFloat(req.params.num1),parseFloat(req.params.num2)),
    op: doMath[req.params.operation].string,
    num1: req.params.num1,
    num2: req.params.num2
  });

});  

app.listen(4000, function () {
  console.log("Starting a server on localhost:4000");
});