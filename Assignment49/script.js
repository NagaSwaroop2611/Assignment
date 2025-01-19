const parentNode = document.getElementById('parentNode');


document
.getElementById("create_para")
.addEventListener("click", () => {
  let newPara = document.createElement("p");
  newPara.innerHTML="This is a paragraph";
  parentNode.appendChild(newPara);
});


document
.getElementById("create_nav")
.addEventListener("click",() => {
  let nav = document.createElement("nav");
  nav.innerHTML=`
  <a href="https://www.google.com" target = "_blank">Google</a>
  </br>
  <a href = "https://www.yahoo.com" target = "_blank">Yahoo</a>`;
  parentNode.appendChild(nav);
});

document
.getElementById("create_strong")
.addEventListener("click", () =>{
  const strong = document.createElement("strong")
  let text = document.createTextNode("Paragraph with strong");
  strong.appendChild(text);
  parentNode.appendChild(strong);
});

