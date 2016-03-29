var express = require('express'),
  app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));  

app.get("/", function(req, res) {
  res.render("index", {op: undefined});
});

function MathOp(symbol, binaryOp) {
  this.symbol = symbol;
  this.binaryOp = binaryOp;
}

var opTable = {
  "add": new MathOp("+", (a,b) => a + b),
  "sub": new MathOp("-", (a,b) => a - b),
  "mult": new MathOp("\xD7", (a,b) => a * b),
  "div": new MathOp("\xF7", (a,b) => a / b)
};

app.get('/:operation/:num1/:num2', function(req, res) {
  var num1 = parseFloat(req.params.num1);
  var num2 = parseFloat(req.params.num2);
  var current = opTable[req.params.operation];
  
  res.render("index", {
    result: current.binaryOp(num1,num2),
    op: current.symbol,
    num1: num1,
    num2: num2
  });

});  

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});