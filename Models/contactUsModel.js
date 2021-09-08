const mongoose = require("mongoose");
const schema = mongoose.Schema;

const contactUsSchema = new schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = contactUs = mongoose.model("contactus", contactUsSchema);