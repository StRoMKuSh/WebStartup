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
<<<<<<< HEAD
  },
  img: Number, 
  link : String, 
=======
  } ,
  img: Number,  
  link : String
>>>>>>> upstream/main
});
const Branch = mongoose.model("Branch", branchSchema);

const yearschema = new mongoose.Schema({
  name : String,
<<<<<<< HEAD
  img : String,
  link : String
});

//YEAR model
const Year = mongoose.model("Year",yearschema);
=======
  img : Number,
  link : String
})

//YEAR model
const Year = mongoose.model("Year",yearschema);





const semschema = new mongoose.Schema({
  name : String,
  img : Number
});

const sems = mongoose.model("semester",semschema);

// const schemabnarhehai  = new sems({
//     name: "Ninth Semester",
//     img : "8"
// });

// schemabnarhehai.save();
>>>>>>> upstream/main

app.get('/', function (req, res) {
  res.render("index");
})

app.get('/notes' , function(req,res){
  Branch.find((err , results)=> {
<<<<<<< HEAD

    res.render("first" , {
=======
    res.render("branch" , {
      res : results,
    });
  });
});


app.get('/notes/:branches' , function(req,res){
    console.log(req.params.branches);
  Year.find((err , results)=> {
    res.render("year" , {
>>>>>>> upstream/main
      res : results,
      branch : req.params.branches
    });
    
  });

});


app.get('/notes/:branches/:year' , function(req,res){
  console.log(req.params.year);
  const k = req.params.year;

    sems.find({select:k},(err , results)=> {
      res.render("sem" , {
        res : results,
      });
      console.log(results);
      
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











<<<<<<< HEAD















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
=======
// app.get("/:id",(req,res)=>{
//   console.log("run");
//   Year.find((err,results)=>{
//     res.render("first" ,{
//           res : results,
//     })
//   })
// })
>>>>>>> upstream/main
