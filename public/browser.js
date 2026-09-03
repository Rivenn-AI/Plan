

//==============Axios va asosiy pageda qolish===

console.log("javaScript ishga tushdi");
 function itemTemplate(item) {
    return`<li class="list-group-item d-flex justify-content-between align-items-center">

        <span> ${item.reja} </span>

        <div>
          <button
            data-id="${item._id }"
            class="btn btn-secondary btn-sm edit-me">
            O'zgartirish
          </button>

          <button
            data-id="${item._id} "
            class="btn btn-danger btn-sm delete-me">
            O'chirish
          </button>
        </div>

      </li>`;
 }

let createField = document.getElementById("create-field");

document.getElementById("create-item").addEventListener("submit", function (e){
    e.preventDefault();
   


    axios
    .post("/create-item", {reja:createField.value})
    .then((response) =>{
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
        createField.value ="";
        createField.focus();
    })
    .catch((err) =>{
        console.log("iltimos qaytatdan harakat qiling!");
    })
});
// Axios request bu traditional emas bu. yoki  fetch ham node core package hisoblanadi.

//=================Delete button ishga tushrish==
//=====Click operatsiyalari==
document.addEventListener("click", function(e){

  //delete operasion
  console.log(e.target);
 if(e.target.classList.contains("delete-me")){
  // alert("siz delete bostingiz")
  if(confirm("anniq uchirmoqchimisz")){
    axios
    .post("/delete-item", {id:e.target.getAttribute("data-id")}) 
    .then((respose) =>{
      console.log(respose.data);
      e.target.parentElement.parentElement.remove();
    })
    .catch((err) =>{
      console.log("iltimos qayta urnib kuring")
    })
  }
 }
//edit operasion
 if(e.target.classList.contains("edit-me")){
   let userInput = prompt("uzgartish kirting",e.target.parentElement.parentElement
    .querySelector(".item-text").innerHTML);
   if (userInput){
     axios
     .post("./edit-item", {
      id:e.target.getAttribute("data-id"),new_input:userInput,})
      .then((response) =>{
       console.log(response.data);
       e.target.parentElement.parentElement.querySelector(".item-text").
       innerHTML = userInput;
      })
      .catch((err) =>{

      })
   }
 }
});
//=============>>>>>>> Delete all button
document.getElementById("clean-all").addEventListener("click", function(){
  axios
  .post("/delete-all", {delete_all:true})
  .then(respose =>{
    alert(respose.data.state);
    document.location.reload();
  })
})