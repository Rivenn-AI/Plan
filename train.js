

//Mit-task-B
function countDigits(str){
    let count = 0;
   for (let i = 0; i<str.length; i++){
    if(str[i]>= "0" && str[i] <="9"){
        count++;
    }
   }
   return count;
}
console.log(countDigits("iuewy3498iu03u8y"));
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


