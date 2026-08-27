const model = require("../model/model");
async function studentlogin(req,res){
    const {username,password,role} = req.body;
    if(!username){
        res.redirect("/studentlogin",{
            message:"Invalid username and password"
        })
    }
    model.get_user(username,(err,row)=>{
        if(err){
            res.redirect("/studentlogin",{
                message:"Invalid username or password"
            })
        }
        if(row.username===username){
            if(row.password===password){
                if(row.role==="student"){
                    res.redirect("/student_dashboard");
                }
                else{
                    res.redirect("/studentlogin",{
                        message:"Invalid username or password"
                    })
                }
            }
            else{
                res.redirect("/studentlogin",{
                    message:"Invalid username or password"
                })
            }
        }
    })

}
async function studentsignup(req,res){
    const {username,password,role} = req.body;
    model.get_user(username,(err,row)=>{
        if(row){
            res.redirect("/studentlogin",{
                message:"User already exits"
            })
        }
        else{
            model.add_student(username,password,role)
        }
    })
}
module.exports = studentlogin,studentsignup;