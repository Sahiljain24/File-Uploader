const { error } = require("console");
const file = require("../Models/File");


exports.localFileUpload=(req,res)=>{
    try{
       const file = req.files.file;
       console.log(file);


       let path = __dirname +"/files/" + Date.now() + `.${file.name.slice(".")[1]}`;
        console.log("PATH ==>"+ path);

        file.mv(path,(err)=>{
            console.log(err);
            console.log("File can't be moved");
        })

        res.Json({
            success:true,
            message:("Local files uploaded successfully")
        });
    }
    catch(err){
        console.log(err);
        res.Json({
            success:false,
            error:err,
            message:err.message;
        })
    }
}
