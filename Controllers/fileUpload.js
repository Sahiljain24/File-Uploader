 const File = require("../Models/File");


exports.localFileUpload= async(req,res)=>{
    try{
       const file = req.files.file;
       console.log(file);


       let path = __dirname +"/files/" + Date.now() + `.${file.name.split(".")[1]}`;
        console.log("PATH ==>"+ path);

        file.mv(path,(err)=>{
            console.log(err);
            console.log("File can't be moved");
        })

        res.json({
            success:true,
            message:("Local files uploaded successfully")
        });
    }
    catch(err){
        console.log(err);
        res.json({
            success:false,
            error:err,
            message:err.message,
        })
    }
}


exports.imageUpload=(req,res)=>{
    try{
         const image =req.files.image;
         console.log(image);

         
    }
    catch(err){

    }
}

