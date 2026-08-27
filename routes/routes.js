const router = express.router();
const controller = require("../controller/controller");
router.get("/studentlogin",(req,res)=>{
    res.render("login");
});
router.post("/studentlogin",controller.studentlogin)
router.get("/studentsignup",(req,res)=>{
    res.render("signup")
});
router.post("/studentsignup",controller.studentsignup);
module.exports = router;