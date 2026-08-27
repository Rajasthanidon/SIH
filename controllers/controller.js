const model = require("../models/model");
async function studentlogin(req,res){
    const {username,password} = req.body;
    if(!username){
        req.session.message = "Invalid username and password"
        // res.redirect("/studentlogin")
        res.send(req.session.message)
    }
    model.get_user(username,(err,row)=>{
        if(err){
            req.session.message = "Invalid username and password"
            // res.redirect("/studentlogin")
            return res.send(req.session.message)
        }
        if(row.username===username){
            if(row.password===password){
                if(row.role==="student"){
                    // res.redirect("/student_dashboard");
                    res.send("Login succesfull")
                }
                else{
                    req.session.message = "Invalid username and password"
                    // res.redirect("/studentlogin")
                    res.send(req.session.message)
                }
            }
            else{
                req.session.message = "Invalid username and password"
                // res.redirect("/studentlogin")
                res.send(req.session.message)
            }
        }
    })

}
function studentsignup(req,res){
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;
    model.get_user(username,(err,row)=>{
        if(row){
            req.session.message = "User already exits"
            // res.redirect("/studentlogin")
            res.send(req.session.message);
        }
        else{
            model.add_student(username,password,role,(done,message)=>{
                if(done){
                    req.session.message = message;
                    // res.redirect("/studentlogin")
                    res.send(message);
                }
                else{
                    req.session.message = message;
                    // res.redirect("studentsignup")
                    res.send(message);
                }
            })
        }
    })
}
module.exports = {
                studentlogin, studentsignup
 };