var express = require('express');
const {
  dirname
} = require('path');
const path = require("path");
const {
  render
} = require("ejs");
const mongoose = require("mongoose");


var app = express();

app.set('view engine', 'ejs');
// respond with "hello world" when a GET request is made to the homepage
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URL || "mongodb+srv://webstartup:Test123456@cluster0.jlc5g.mongodb.net/knit", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log("u are connected with mongoose");
  } else {
    console.log("u r failed" + err);
  }
});


const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name"],
  },
  img: Number,
  link: String
});
const Branch = mongoose.model("Branch", branchSchema);

const yearschema = new mongoose.Schema({
  name: String,
  img: Number,
  link: String
})

//YEAR model
const Year = mongoose.model("Year", yearschema);


const semschema = new mongoose.Schema({
  name: String,
  img: Number,
  select : String,
  link : String,
});

const sems = mongoose.model("semester", semschema);

const subjectschema = new mongoose.Schema({
  name: String,
  img: Number,
  select : String,
  link : String,
});

const subject = mongoose.model("subjects", subjectschema);


app.get('/', function (req, res) {
  res.render("index");
})

app.get('/notes', function (req, res) {
  Branch.find((err, results) => {
    res.render("branch", {
      resl: results,
    });
  });
});


app.get('/notes/:branches', function (req, res) {
  Year.find((err, results) => {
    res.render("year", {
      resl: results,
      branch: req.params.branches
    });

  });

});


app.get('/notes/:branches/:year', function (req, res) {
  const k = req.params.year;
  sems.find({
    select: k
  }, (err, results) => {
    res.render("semester", {
      resl: results,
      branch: req.params.branches,
      year: req.params.year,
    });
  });
});

app.get('/notes/:branches/:year/:sem' ,function(req , res){
  var a = req.params.branches;
  var b = req.params.year;
  var c = req.params.sem;
  var d = a+b+c;
  subject.find({select : d} , (err, results) => {
    res.render("subject" , {
      resl: results,
      branch: req.params.branches,
      year: req.params.year,
      sems : req.params.sem,
    });
  });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Your server is started at port " + PORT);
});













