const mongoose = require("mongoose");

const fileSchema = new mongoose.schema({
    name:{
        type:String,
        require:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
})

const file = mongoose.model(File,"fileSchema");
module.exports=File;