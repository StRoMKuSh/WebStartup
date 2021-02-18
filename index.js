var express = require('express');
const { dirname } = require('path');
const path = require("path");
const { render } = require("ejs");
const mongoose = require("mongoose");


var app = express();

app.set('view engine', 'ejs');
// respond with "hello world" when a GET request is made to the homepage
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URL ||"mongodb://localhost:27017/knit",{useNewUrlParser : true ,  useUnifiedTopology: true  },(err)=>
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
  } ,
  img: Number,  
});

const Branch = mongoose.model("Branch", branchSchema);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'views/index.html'))
})

app.get('/notes' , function(req,res){
  Branch.find((err , results)=> {
    res.render("first" , {
      res : results,
    });
  });
});

const PORT = 8080;

app.listen(PORT,()=>
{
    console.log("Your server is started at port "+PORT);
});
