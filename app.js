const express = require("express");
const dotenv=require("dotenv").config();

const app= express();
const home_router=require("./src/routers/home_router");
const err_catch=require("./src/middlewares/error_middleware");


//ejs ayarları
const ejs=require("ejs");
const express_layout=require("express-ejs-layouts");
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"./src/views"));


//public dizini erişilebilir duruma getirme ayarı
app.use(express.static("public"));

//session congig
const session=require("express-session");
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

//request ayarları
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use(express_layout);
app.use("/",home_router);
app.use(err_catch);


app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT+ " port server aktif!");
})