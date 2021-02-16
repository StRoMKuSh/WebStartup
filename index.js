var express = require('express');
const { dirname } = require('path');
var app = express()
const path = require("path");

// respond with "hello world" when a GET request is made to the homepage

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'views/home.html'))
})

const PORT = 8080;

app.listen(PORT,()=>
{
    console.log("Your server is started at port "+PORT);
});
