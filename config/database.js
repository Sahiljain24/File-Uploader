const mongoose = require("mongoose");
require('dotenv');

exports.dbConnect = ()=>{
       mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       }).then=()=>(console.log("DATABASE connection Successfull"))
       .catch(err)=()=>{
        console.log("could not connect t0 database");
        console.log(err);
        process.exit(1);
       }
}

module.exports=dbConnect;