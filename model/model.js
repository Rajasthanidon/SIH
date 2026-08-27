const pool = require("../database/connection");
async function get_user(username,callback){
    const response = await pool.query(`SELECT * FROM users WHERE username = $1`,[username]);
    if(response.rows.length===0) return callback(err,null); 
    const row = response.rows[0];
    callback(null,row);
}
async function add_student(username,password,role){
    try{
        await pool.query(`INSERT INTO users (username,password,role) VALUES($1,$2,$3)`,[username,password,role]);
    res.redirect("/studentlogin",{
        message:"User successfully added"
    });
}
catch(err){
    res.redirect("/studentsignup",{
        message:err
    })
}
}
module.exports = get_user,add_student;