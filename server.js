console.log("webserverni boshlash");
const express = require("express"); 
const app = express(); 
const http = require("http"); 
const fs = require("fs");
let user;
fs.readFile("database/user.json","utf-8", (err, data) =>{
         if(err) {
            console.log("ERROR",err);
         } else{
            user = JSON.parse(data); 
         }
});
//1 Expressga
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
//2 Sessions
//3 Backend side server. View code
app.set("views", "views");
app.set("view engine", "ejs");
//4
    

app.get("/author",(req,res)=> {
  res.render("author", {user: user});
});
app.get("/", function(req,res){
    res.end(`<h1>Hello world by Riven</h1>`);
});

const server =http.createServer(app); 
let PORT = 4000;
server.listen(PORT, function () {
    console.log(`The server is running succesfully on port: ${PORT}`);
});
