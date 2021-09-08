const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    fullname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    adress : {
        type : String
    },
    admin : {
        type : Boolean,
        default: false
    }

})
module.exports = user = mongoose.model("user",userSchema);