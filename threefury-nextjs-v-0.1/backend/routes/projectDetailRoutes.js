const express = require("express");
const saveProjectDetails=require("../controllers/projectDetailController")

const router = express.Router();

router.post("/save",saveProjectDetails);


module.exports = router;