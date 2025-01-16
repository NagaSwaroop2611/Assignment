const list = document.getElementById("list_items");
function countItems(){
  console.log(`Number of items in list : ${list.options.length}`);
  document.getElementById("para").innerHTML = `Number of items in list : ${list.options.length}`;
}


function deleteItem(valueToDelete){
  let flag = false;
  for(let i = 0; i < list.options.length; i++){
    if(list.options[i].innerHTML === valueToDelete){
      // console.log(list.options[i].innerHTML === valueToDelete)
      list.remove(i);
      flag =true;
      break;
    }
  }
  // console.log(flag)
  if (flag) {
      alert(`Item '${valueToDelete}' deleted successfully.`);
  } 
  else {
    alert(`Item '${valueToDelete}' not found in the list.`);
  }
}
