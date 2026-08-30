
//MIT-task-A
function countLetter(letter,word){
    let count = 0;
    for(let i =0; i<word.length; i++){
           if(word[i] === letter){
            count++
        }
    }
       return count;
};
console.log(countLetter("d","Muhriddin"));


console.log("Ota-bobmizdan qolgan maslahatlar");
const list =[
"yaxshi talaba buling", //0-20
"tugri boshliq tanlang va kuproq xato qiling", //20-30
"uzingizga ishlashni boshlang", //30-40
"siz kuchli bulgan ishni qiling", //40-50
"yoshlarga investitsiya qiling", //50-60
"Endo foydasi yuq, damni oling", //60
];

//  // async function
// async function maslahatBering (a,){
//     if(typeof a !== 'number') throw new Error("Insert number");
//      else if(a <=20) return list[0];
//      else if(a >20 && a <=30) return list[1];
//      else if(a >30 && a <=40) return list[2];
//      else if(a >40 && a <=50) return list[3];
//      else if(a >50 && a <=60) return list[4];
//       else{
//         return new Promise ((resolve, reject) =>{
//                   setInterval( () => {
//                           return list[5];
//                   },1000);
//                 });
//         }
//     }    
      
      
// }
//callback function
function maslahatBering (a, callback){
    if(typeof a !== 'number') callback("Insert number",null);
     else if(a <=20) callback(null, list[0]);
     else if(a >20 && a <=30) callback(null, list[1]);
     else if(a >30 && a <=40) callback(null, list[2]);
     else if(a >40 && a <=50) callback(null, list[3]);
     else if(a >50 && a <=60) callback(null, list[4]);
      else{
        setInterval(function() {
            callback(null,list[5]);
        }, 1000)
      }
}

// then/catch
console.log("buyerda utdi");
// Asiykirness function sinkerness functionlar utib bulgandan keyin asinkirness functionga utadi.
maslahatBering(65, (err, data) => {
    if(err) console.log('ERROR', err);
    else{
        console.log('Javob:', data);
    }
});
 console.log("bu oxri")

// asyn/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     // javob = await maslahatBering(70);
//     // console.log(javob);
//     // javob = await maslahatBering(41);
//     // console.log(javob)
// }
// run();