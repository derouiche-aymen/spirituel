//importing
const mongoose = require("mongoose");
const config = require("config");

//connect db
const connectDB = async () => {
  try {
    await mongoose.connect(config.get("MONGO_URI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Mongoose connected...");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;