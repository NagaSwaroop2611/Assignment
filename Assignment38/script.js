const rectangle = {
  length : +prompt("Enter the length"),
  width : +prompt("Enter the width"),
  perimeter : function(){
    return (2*(this.width+this.length));
  },
  area : function(){
    return this.length * this.width;
  }
}

document.write(`Perimeter : ${rectangle.perimeter()} </br>`);
document.write(`Area : ${rectangle.area()}`);