let imageOver = document.getElementById("image");
// console.log(imageOver);

imageOver.addEventListener("mouseover", () => {
  imageOver.src = "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  // imageOver.height = "auto";
  // imageOver.width = "auto";
});

imageOver.addEventListener("mouseout", () => {
  imageOver.src = "https://images.pexels.com/photos/28406651/pexels-photo-28406651/free-photo-of-historic-armenian-church-on-akdamar-island-van.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load";
});