var express = require('express');
const { dirname } = require('path');
const path = require("path");
const { render } = require("ejs");
const mongoose = require("mongoose");


var app = express();

app.set('view engine', 'ejs');
// respond with "hello world" when a GET request is made to the homepage
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URL ||"mongodb+srv://webstartup:Test123456@cluster0.jlc5g.mongodb.net/knit",{useNewUrlParser : true ,  useUnifiedTopology: true  },(err)=>
{
    if(!err) 
    {console.log("u are connected with mongoose");}
    else 
    {console.log("u r failed"+err);}
});

const branchSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, "Please provide the name"],
  },
  img: Number, 
  link : String, 
});

const Branch = mongoose.model("Branch", branchSchema);

const yearschema = new mongoose.Schema({
  name : String,
  img : String,
  link : String
});

//YEAR model
const Year = mongoose.model("Year",yearschema);

app.get('/', function (req, res) {
  res.render("index");
})

app.get('/notes' , function(req,res){
  Branch.find((err , results)=> {

    res.render("first" , {
      res : results,
    });
  });
});


app.get("/notes/:xyz", function(req , res){
  const links = req.params.xyz;
  Year.find({
    link : links
  } , function(err , results){
    if(!err){
      res.render("first",{
        res : results,
      });
    }
    else console.log(err);
  });
});


const PORT = 8080;

app.listen(PORT,()=>
{
    console.log("Your server is started at port"+PORT);
});


























// app.get("/:xyz", function(req , res){
//   const links = req.params.xyz;
//   Branch.findOne({
//     link : links
//   }, function(err , results){
//     res.render("first" , {
//       res : results,
//     });
//   });  
// });
