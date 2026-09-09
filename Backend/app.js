require("dotenv").config();
const express = require("express");
const cors = require("cors");

require("./database/db")
const app = express();
const session = require("express-session")
app.use(session({
    secret:"mysecretkey",
    resave:false,
    saveUninitialized:false
}))
app.use(cors({
    origin: ["https://academia-portal-five.vercel.app",
        "http://localhost:5500"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
const webroutes = require("./routes/routes")
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use("/",webroutes);
module.exports = app;