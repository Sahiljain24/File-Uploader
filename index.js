const express = require("express");
const app = express();

require("dotenv");
const PORT = process.env.PORT || 3000;

app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload());

const upload = require("./routes/fileUpload");
app.use("/api/v1/upload", upload);




const dbConnect = require("./config/database");
const cloudinaryConnect = require("./config/cloudinary");
dbConnect.dbConnect();
cloudinaryConnect.cloudinaryConnect();

app.listen(PORT,()=>{
    console.log("APP Started running successfully");
})