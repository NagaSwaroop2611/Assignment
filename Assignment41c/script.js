let a = +prompt("Enter side 1");
let b = +prompt("Enter side 2");
let c = +prompt("Enter side 3");

function area(a,b,c){
  let s = (a + b + c)/2;
  console.log(a,b,c,s);

  let product = s*(s-a)*(s-b)*(s-c);

  let area = Math.sqrt(product);

  document.body.innerHTML = 
  `<h3> The Area of Triangle </h3>
  <p> Area of Triangle - ${area}`;
}

area(a,b,c);