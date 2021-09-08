const mongoose = require("mongoose");
const schema = mongoose.Schema;

const produitSchema = new schema({
    price : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true
    },
    img : {
        type : String,
    },
    description : {
        type : String,
    }

    })
module.exports = box = mongoose.model("produit",produitSchema);