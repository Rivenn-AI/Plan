
//MIT task-d
//Shunday class tuzing tuzing nomi Shop, 
// va uni constructoriga 3 hil mahsulot pass 
// bolsin, hamda classning 3ta methodi bolsin, 
// biri qoldiq, biri sotish va biri qabul. 
// Har bir method ishga tushgan vaqt ham log qilinsin. 
// MASALAN: const shop = new Shop(4, 5, 2); 
// shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
// return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
class Shop{
  #non;
  #cola;
   #lagmon;
  constructor(non, cola, lagmon){
    this.#non = non;
    this.#cola= cola;
    this.#lagmon= lagmon;
  }
  
  qoldiq(){
    const soldTime = new Date().toLocaleTimeString();
    console.log(`Hozir soat ${soldTime} da ${this.#non} ta non, ${this.#cola} ta cola va ${this.#lagmon} ta lagmon bor`)
  }
  sotish(maxsulot, qiymat) {
    if (maxsulot === "non") {
        this.#non -= qiymat;
    } else if (maxsulot === "cola") {
        this.#cola -= qiymat;
    } else if (maxsulot === "lagmon") {
        this.#lagmon -= qiymat;
    }

    console.log(`Sotilgan tavar: ${maxsulot}, miqdori: ${qiymat}`);
}
 qabul(maxsulot, qiymat){
  if (maxsulot === "non") {
    this.#non += qiymat;
} else if (maxsulot === "cola") {
    this.#cola += qiymat;
} else if (maxsulot === "lagmon") {
    this.#lagmon += qiymat;
}
  }
}
const myShop = new Shop(4,5,2);
myShop.qoldiq();
myShop.sotish("non",1);
myShop.qoldiq();
myShop.qabul("lagmon",5);
myShop.qoldiq();
myShop.sotish("cola",2)
myShop.qoldiq();
//MIT task-C
// function check(a,b){
//   return a.split("").sort().join("") === b.split("").sort().join("");
// }
// console.log(check("Ali","lIA"));
// console.log(check("bek","ebk"));

//Mit-task-B
// function countDigits(str){
//     let count = 0;
//    for (let i = 0; i<str.length; i++){
//     if(str[i]>= "0" && str[i] <="9"){
//         count++;
//     }
//    }
//    return count;
// }
// console.log(countDigits("iuewy3498iu03u8y"));
// //MIT-task-A
// function countLetter(letter,word){
//     let count = 0;
//     for(let i =0; i<word.length; i++){
//            if(word[i] === letter){
//             count++
//         }
//     }
//        return count; 
// };
// console.log(countLetter("d","Muhriddin"));


