const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_URL || "mongodb+srv://webstartup:Test123456@cluster0.jlc5g.mongodb.net/knit", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log("u are connected with mongoose");
  } else {
    console.log("u r failed " + err);
  }
});



