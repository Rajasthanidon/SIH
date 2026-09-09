const pool = require("./connection");
async function createtable(){
    await pool.query(`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name TEXT,
        email TEXT UNIQUE,
        number TEXT UNIQUE,
        institute TEXT,
        department TEXT,
        designation TEXT,
        experiance TEXT,
        expertise TEXT,
        password TEXT,
        role TEXT);`)
        console.log("DATABASE CONNECTED");
}
module.exports = createtable;