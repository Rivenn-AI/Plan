//MIt Task-M
function kvadrat(number) {
  let result = [];
  for (let i = 0; i < number.length; i++) {
    result.push({
      number: number[i],
      square: number[i] * number[i],
    });
  }
  return result;
}
console.log(kvadrat([3, 5, 9]));
//Mit Task-L
// function teskari(q) {
//   let words = q.split(" ");
//   let reverse = "";
//   for (let i = 0; i < words.length; i++) {
//     for (let j = words[i].length - 1; j >= 0; j--) {
//       reverse += words[i][j];
//     }
//     reverse += " ";
//   }
//   return reverse;
// }
// console.log(teskari("Men kecha Seoul bordim"));

//Mit task-k
// function countVowels(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if ("aeiou".includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("jaloliddin"));
//Mit Task-F
// function findDouble(f) {
//   for (let i = 0; i < f.length; i++) {
//     for (let j = 0; j < f.length; j++) {
//       if (f[i] === f[j] && i !== j) {
//         return true;
//       }
//     }
//   }
// }
// console.log(findDouble("jaloliddin"));

//MIT task-g
// function getHighestIndex(arr) {
//   let highest = arr[0];
//   let highestIndex = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > highest) {
//       highest = arr[i];
//       highestIndex = i;
//     }
//   }

//   return highestIndex;
// }

// console.log(getHighestIndex([10, 9, 44, 3]));
//MIT task-c
// function teskari(str) {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     //for (boshlanish; shart; o'zgarish)
//     reverse += str[i];
//   }
//   return reverse;
// }
// console.log(teskari("Ali"));
//MIT task-d
// class Shop{
//   #non;
//   #cola;
//    #lagmon;
//   constructor(non, cola, lagmon){
//     this.#non = non;
//     this.#cola= cola;
//     this.#lagmon= lagmon;
//   }

//   qoldiq(){
//     const soldTime = new Date().toLocaleTimeString();
//     console.log(`Hozir soat ${soldTime} da ${this.#non} ta non, ${this.#cola} ta cola va ${this.#lagmon} ta lagmon bor`)
//   }
//   sotish(maxsulot, qiymat) {
//     if (maxsulot === "non") {
//         this.#non -= qiymat;
//     } else if (maxsulot === "cola") {
//         this.#cola -= qiymat;
//     } else if (maxsulot === "lagmon") {
//         this.#lagmon -= qiymat;
//     }

//     console.log(`Sotilgan tavar: ${maxsulot}, miqdori: ${qiymat}`);
// }
//  qabul(maxsulot, qiymat){
//   if (maxsulot === "non") {
//     this.#non += qiymat;
// } else if (maxsulot === "cola") {
//     this.#cola += qiymat;
// } else if (maxsulot === "lagmon") {
//     this.#lagmon += qiymat;
// }
//   }
// }
// const myShop = new Shop(4,5,2);
// myShop.qoldiq();
// myShop.sotish("non",1);
// myShop.qoldiq();
// myShop.qabul("lagmon",5);
// myShop.qoldiq();
// myShop.sotish("cola",2)
// myShop.qoldiq();
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
