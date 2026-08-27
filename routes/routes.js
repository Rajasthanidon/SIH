const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
router.get("/studentlogin",(req,res)=>{
    const msg = req.session.message;
    res.render("login",{msg});
    delete req.session.message;
});
router.post("/studentlogin",controller.studentlogin)
router.get("/studentsignup",(req,res)=>{
    const msg = req.session.message;
    res.render("signup",{msg})
    delete req.session.message;
});
router.post("/studentsignup",controller.studentsignup);
module.exports = router;