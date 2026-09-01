const http = require("http");
const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://Riven:Jaloliddin2005A@cluster0.mgxxaw2.mongodb.net/?appName=Cluster0";

const client = new MongoClient(connectionString);

async function startServer() {

  try {

    await client.connect();

    console.log("Mongo db connect success");

    // MongoDB database
    const db = client.db("Reja");

    // app.js ga db ni beramiz
    const createApp = require("./app");

    const app = createApp(db);

    const server = http.createServer(app);

    const PORT = 4001;

    server.listen(PORT, () => {

      console.log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
      );

    });

  } catch (err) {

    console.log("MongoDB connection error:", err);

  }

}

startServer();

// const http = require("http"); 
// const mongodb= require("mongodb");


// let db;
// const connectionString = 
// "mongodb+srv://Riven:Jaloliddin2005A@cluster0.mgxxaw2.mongodb.net/?appName=Cluster0"


// mongodb.connect(connectionString,
//      {useNewUrlParser: true,
//     useUnifiedTopology: true,
//      }, 
//    (err, client) => {
//     if(err) console.log("ERROR on connection to Mongo db");
//     else{
//         console.log("Mongo db connect success")
//         module.exports = client;
//         const app = require("./app");
//         const server =http.createServer(app); 
//         let PORT = 4001;
//         server.listen(PORT, function () {
//        console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
//      });
//     };
// });











































// console.log("webserverni boshlash");
// const express = require("express"); 
// const app = express(); 
// const http = require("http"); 
// const fs = require("fs");
// let user;
// fs.readFile("database/user.json","utf-8", (err, data) =>{
//          if(err) {
//             console.log("ERROR",err);
//          } else{
//             user = JSON.parse(data); 
//          }
// });
// //1 Expressga
// app.use(express.static("public")); 
// app.use(express.json()); 
// app.use(express.urlencoded({extended: true})); 
// //2 Sessions
// //3 Backend side server. View code
// app.set("views", "views");
// app.set("view engine", "ejs");
// //4
    

// app.get("/author",(req,res)=> {
//   res.render("author", {user: user});
// });
// app.get("/", function(req,res){
//     res.end(`<h1>Hello world by Riven</h1>`);
// });

// const server =http.createServer(app); 
// let PORT = 4000;
// server.listen(PORT, function () {
//     console.log(`The server is running succesfully on port: ${PORT}`);
// });
