const mongoose = require("mongoose");


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
  img: String,
  link: String
})

//YEAR model
const Year = mongoose.model("Year", yearschema);


const semschema = new mongoose.Schema({
  name: String,
  img: String,
  select: String,
  link: String,
});

const sems = mongoose.model("semester", semschema);

const subjectschema = new mongoose.Schema({
  name: String,
  img: String,
  select: String,
  link: String,
});

const subject = mongoose.model("subjects", subjectschema);

//console.log("connected with schemas");

module.exports = {
  subject,
  sems,
  Year,
  Branch
};