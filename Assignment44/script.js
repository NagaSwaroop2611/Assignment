let para =document.getElementById("para");
// console.log(para.style);

document.
getElementById("button1")
.addEventListener("click",function(){
  para.style.fontFamily = "Poppins";
});

document
.getElementById("button2")
.addEventListener("click",() => {
  para.style.fontSize = "20px";
});

document
.querySelector("#button3")
.addEventListener("click", () => {
  para.style.color = "#7b29c7";
});
// console.log(document.querySelector("#button3"));