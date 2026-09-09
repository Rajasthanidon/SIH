const model = require("../models/model");
async function login(req,res){
    const {email,password} = req.body;
    if(!email){
        return res.json({
            sucess:false,
            message:"Invalid username and password"})
    }
    model.get_user(email,(err,row)=>{
        if(err){
            return res.json({
                success:false,
                message:"Invalid username and password"
            })
        }
        if(row.username===email){
            if(row.password===password){
                if(row.role==="student"){
            
                    res.json({
                        success:true,
                        message:"Login successfull"
                    })
                }
                else{
                    res.json({
                        success:false,
                        message:"Invalid username and password"
                    })
                }
            }
            else{
                res.json({
                    success:false,
                    message:"Invalid username and password"
                })
            }
        }
    })

}
function signup(req,res){
    const {name,email,number,institute,department,designation,experiance,expertise,password} = req.body
    model.getuser(username,(err,row)=>{
        
        if(row){res.json({
            succes:false,
            message:"User already exists"
        })}
        else{
            model.adduser(name,email,number,institute,department,designation,experiance,expertise,password)
        }
    })

    
}
async function getdata(req,res){
    const {email,number} = req.body;
    model.getdata(email,number);
}
module.exports = {
                login, signup,getdata
 };