const express = require("express");
const app = express();
const webroutes = require()
app.use(express.urlencoded({extended:true}));
app.use("/",webroutes);
module.exports = app;