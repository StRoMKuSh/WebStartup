var express = require('express');
const { dirname } = require('path');
const path = require("path");
const { render } = require("ejs");


var app = express();
app.set('view engine', 'ejs');
// respond with "hello world" when a GET request is made to the homepage
app.use(express.static("public"));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'views/index.html'))
})

app.get('/notes' , function(req,res){
  res.render("first");
});

const PORT = 8080;

app.listen(PORT,()=>
{
    console.log("Your server is started at port "+PORT);
});
