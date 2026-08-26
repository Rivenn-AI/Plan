console.log("webserverni boshlash");
const express = require("express"); //require() → boshqa package/module'ni kodimizga olib kiradi.
const app = express(); //app — endi bizning Express serverimizni boshqaradigan asosiy object.
const http = require("http"); //HTTP server yaratishga yordam beradi.

//Express web server

//1 Expressga kirib kelayotgan ma'lumotlarga bog'liq kodlar yozladi.
app.use(express.static("public")); //"public" papkasidagi fayllarni browserga berishga ruxsat ber.
app.use(express.json()); //JSON ma'lumotlar uchun.JSON — frontend va backend o‘rtasidagi umumiy "til"lardan biri.
app.use(express.urlencoded({extended: true})); //HTML <form> bilan ishlaganda muhim.

//2 Sessions
//3 Backend side server. View code
app.set("views", "views");
app.set("view engine", "ejs"); //EJS — HTML ichiga JavaScript qo‘shish imkonini beradigan template engine.
//4 Routing code. Browser / manziliga GET request yuborsa, mana shu function ishlasin.
app.get("/", function(req,res){
    res.end(`<h1>Hello world by Riven</h1>`);
});    //res.end() → response'ni yuboradi va requestni tugatadi.
////req - requestClient/browserdan kelgan ma'lumot.
////res - response Server clientga qaytaradigan javob.
// app.get("/gift", function(req,res){
//     res.end(`<h1>Siz sovg'alar bulmidasz</h1>`);
// });



// app.post('/create-item', (req,res) =>{
//    console.log(req.body);
//    res.json({test:"success"});
// }); //console.log(req.body); Bu user yuborgan ma'lumotni ko‘rsatadi.


// app.get('/', function (req, res){
//        res.render("harid");
// });//  res.render("harid"); views papkasidan home.ejsni top va browserga render qilib ber.


const server =http.createServer(app); //HTTP server yarat va requestlarni mening Express appimga ber.
let PORT = 4000;
server.listen(PORT, function () {
    console.log(`The server is running succesfully on port: ${PORT}`);
});


// SSR orqali frontet
// Bootstrap css 
// Post Methodli API
// publicda fronetga tegishli bulgan Java script , stylelar img lar quriladi
