let fontButton = document.getElementById("changeFont");
let borderButton = document.getElementById("borderImage")
let para = document.getElementById("para");

console.log(fontButton,borderButton,para);

function changeParaText(){
  para.classList.add("para-font")
}

function addBorder(){
  para.style.border = "2px dashed blue";
  console.log()
}