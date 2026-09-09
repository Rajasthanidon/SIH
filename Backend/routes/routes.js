const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
router.get("/login",(req,res)=>{
    res.send("hello")
    
});
router.post("/api/login",controller.login)
router.post("/api/signup",controller.signup)
router.get("/api/profile/data",controller.getdata)
module.exports = router;