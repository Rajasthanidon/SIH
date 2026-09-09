const pool = require("../database/connection");
async function get_user(username,callback){
    try{
        const response = await pool.query(`SELECT * FROM users WHERE username = $1`,[username]); 
        if(response.rows.length===0) return callback(null,null);
        const row = response.rows[0];

    callback(null,row);}
    catch(err){
        callback(err,null);
    }
}
async function add_student(username,password,role,callback){
    try{
        await pool.query(`INSERT INTO users (username,password,role) VALUES($1,$2,$3)`,[username,password,role],()=>{
            callback(true,"User successfully added");
        });
}
catch(err){
    callback(false,err);
}
}
async function adduser(name,email,number,institute,department,designation,experiance,expertise,password,role){
    try{
        const response = await pool.query(`INSERT INTO users(name,email,number,institute,department,designation,experiance,expertise,password,role) VALUE($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,[name,email,number,institute,department,designation,experiance,expertise,password,role])
        res.json({
            success:true,
            message:"Data uploaded"
        })
    }
    catch(err){
        res.json({
            success:false,
            message:"Some error occured"
        })
    }
}
async function getdata(email,number){
    try{
        const response = await pool.query(`SELECT * FROM users WHERE email = $1 OR number = $2`,[email,number]);
        res.json({
            success:true,
            data:response.rows[0]
        })
    }
    catch(err){
        res.json({
            success:false,
            data:null
        })
        console.error(err.message);
    }
}
module.exports = {
    get_user,add_student,adduser,getdata

};