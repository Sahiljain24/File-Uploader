const express = require("express");
const router = express.Router();
 
const {localFileUpload, imageUpload} = require('../Controllers/fileUpload');

router.post("/localFileUpload",localFileUpload);
router.post("/imageUpload",imageUpload);
router.post("/ ",);
router.post("/",);




module.exports=router;