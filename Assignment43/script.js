let imageOver = document.getElementById("image");
// console.log(imageOver);

imageOver.addEventListener("mouseover", () => {
  imageOver.src = "https://images.pexels.com/photos/30359820/pexels-photo-30359820/free-photo-of-intricate-moorish-archways-in-alhambra-palace-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  // imageOver.height = "auto";
  // imageOver.width = "auto";
});

imageOver.addEventListener("mouseout", () => {
  imageOver.src = "https://images.pexels.com/photos/28406651/pexels-photo-28406651/free-photo-of-historic-armenian-church-on-akdamar-island-van.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load";
});