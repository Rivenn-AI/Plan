console.log("webserverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//Express web server

//1 Expressga kirib kelayotgan ma'lumotlarga bog'liq kodlar yozladi.
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 Sessions
//3 Backend side server. View code
app.set("views", "views");
app.set("view engine", "ejs");
//4 Routing code
app.get("/hello", function(req,res){
    res.end(`<h1>Hello world by Riven</h1>`);
});
app.get("/gift", function(req,res){
    res.end(`<h1>Siz sovg'alar bulmidasz</h1>`);
});

const server =http.createServer(app);
let PORT = 4000;
server.listen(PORT, function () {
    console.log(`The server is running succesfully on port: ${PORT}`);
});
