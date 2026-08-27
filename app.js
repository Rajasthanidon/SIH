require("dotenv").config();
const express = require("express");
require("./database/db")
const app = express();
const session = require("express-session")
app.use(session({
    secret:"mysecretkey",
    resave:false,
    saveUninitialized:false
}))
const webroutes = require("./routes/routes")
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use("/",webroutes);
module.exports = app;