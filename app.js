
const express = require("express");
const mongodb = require("mongodb")

module.exports = function(db) {
  const app = express();
  
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  
  app.set("views", "views");
  app.set("view engine", "ejs");
  
  app.post("/create-item", (req, res) => {
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
      console.log(data.ops);
      res.json(data.ops[0]);
      // if(err) {
      //   console.log(err);
      //   res.end("Something went wrong");
      // } else {
      //   console.log(data);
      //   res.end("Succesfully added");
      // }
    });
  });

  //=====================>>>>Delete button
  app.post("/delete-item",(req,res) => {
    const id= req.body.id;
    db.collection("plans").deleteOne({_id:new mongodb.ObjectId(id)},
     function(err,data){
     res.json({state:"success"});
    })
  });

  //=====================>>>>>>Edit button
  app.post("/edit-item", (req,res) =>{
    const data = req.body;
    console.log(data);
    db.collection("plans")
    .findOneAndUpdate(
      {_id:new mongodb.ObjectId(data.id)},
    {$set: {reja:data.new_input}}, 
    function(err,data){
      res.json({state:"succes"});
    })
  });
  //======== Delete all button
  app.post("/delete-all", (req,res) =>{
    if(req.body.delete_all){
      db.collection("plans").deleteMany(function(){
        res.json({state:"hamma rejalar uchrildi"});
      });
    }
  });


  app.get("/", function(req, res) {
    db.collection("plans").find().toArray((err, data) => {
      if(err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        console.log(data);
        res.render("reja", {items: data});
      }
    });
  });
  
  return app;
};




// console.log("webserverni boshlash");
// const express = require("express"); 
// const app = express(); 

// // // Mongo db chaqrish
// const db = require("./server").db();
// //const http = require("http"); 
// // const fs = require("fs");
// // let user;
// // fs.readFile("database/user.json","utf-8", (err, data) =>{
// //          if(err) {
// //             console.log("ERROR",err);
// //          } else{
// //             user = JSON.parse(data); 
// //          }
// // });
// //1 Expressga
// app.use(express.static("public")); 
// app.use(express.json()); 
// app.use(express.urlencoded({extended: true})); 
// //2 Sessions
// //3 Backend side server. View code
// app.set("views", "views");
// app.set("view engine", "ejs");
// //4
// app.post("/create-item", (req, res) =>{
//   console.log(req.body);
//   const new_reja = req.body.reja;
//   db.collection("plans").insertOne( {reja: new_reja}, (err,data) => {
//     console.log(data.ops);
//     res.json(data.ops[0]);
//     // if(err){
//     //   console.log(err);
//     //   res.end("Something went wrong");
//     // } else{
//     //   console.log(data);
//     //   res.end("Succesfully added");
//     // }
//   });
// });

// app.get("/",function (req,res) {
//   db.collection("plans")
//   .find()
//   .toArray( (err, data) => {
//     if(err) {
//       console.log(err);
//       res.end("Something went wrong");
//     } else{
//       console.log(data);
//       res.render("reja", {items: data});
//     }
//   });
  
// });
// module.exports = app;
// app.get("/", function(req,res){
//     res.end(`<h1>Hello world by Riven</h1>`);
// });

// const server =http.createServer(app); 
// let PORT = 4001;
// server.listen(PORT, function () {
//     console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
// });






//=========23-24-25==============// Mongo va Crud urnatish
//Mongo db ulash
// //====================21-22======================//

// console.log("Ota-bobmizdan qolgan maslahatlar");
// const list =[
// "yaxshi talaba buling", //0-20
// "tugri boshliq tanlang va kuproq xato qiling", //20-30
// "uzingizga ishlashni boshlang", //30-40
// "siz kuchli bulgan ishni qiling", //40-50
// "yoshlarga investitsiya qiling", //50-60
// "Endi foydasi yuq, damni oling", //60
// ];
//   //===========Synchronous function============//
// // //callback function
// // function maslahatBering (a, callback){
// //     if(typeof a !== 'number') callback("Insert number",null);
// //      else if(a <=20) callback(null, list[0]);
// //      else if(a >20 && a <=30) callback(null, list[1]);
// //      else if(a >30 && a <=40) callback(null, list[2]);
// //      else if(a >40 && a <=50) callback(null, list[3]);
// //      else if(a >50 && a <=60) callback(null, list[4]);
// //       else{
// //         setInterval(function() {
// //             callback(null,list[5]);
// //         }, 1000)
// //       }
// // }
  
      
// //       // Asiykirness function sinkerness functionlar utib bulgandan keyin asinkirness functionga utadi.
// // maslahatBering(65, (err, data) => {
// //     if(err) console.log('ERROR', err);
// //     else{
// //         console.log('Javob:', data);
// //     }
// // });
// //  console.log("bu oxri")


// // //==========Asynchronous function=========//
// async function maslahatBering (a,){
//     if(typeof a !== 'number') throw new Error("Insert number");
//      else if(a <=20) return list[0];
//      else if(a >20 && a <=30) return list[1];
//      else if(a >30 && a <=40) return list[2];
//      else if(a >40 && a <=50) return list[3];
//      else if(a >50 && a <=60) return list[4];
//       else{
       
//         return new Promise ((resolve, reject) =>{
//                   setTimeout( () => {
//                           resolve( list[5]);
//                   },1000);
//                 });
//         }
//     }
    
    
// //==========>>>>>Promise ni ichda setTime out ishlaydi


// //==========>>>>>>>  THEN. CATCH.
// // console.log("buyerda utdi");
// // maslahatBering(65)
// //   .then((data) => {
// //     console.log("javob:",data);
// //   })
// //   .catch((err) => {
// //     console.log("ERROR", err);
// //   });
// //  console.log("bu oxri") // Asiykirness function sinkerness functionlar utib bulgandan keyin asinkirness functionga utadi.


//  //===========>>>>>> ASYNCH. AWAIT

// async function run() {
//     let javob = await maslahatBering(24);
//     console.log(javob);
//     javob = await maslahatBering(67);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob)
// }
// run();