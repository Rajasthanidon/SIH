const pool = require("./connection");
async function createtable(){
    await pool.query(`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username TEXT,
        password TEXT,
        role TEXT)`)
        console.log("DATABASE CONNECTED");
}
module.exports = createtable;