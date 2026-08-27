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
module.exports = {
    get_user,add_student

};