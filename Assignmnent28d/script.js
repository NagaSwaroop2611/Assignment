function reverseString(string) {
  let reversed = "";

  // Loop through the string in reverse order
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

// Test case
const input1 = "sachin";
const input2 = "hello";
document.write(`"${reverseString(input1)}"</br>`); //Output: "nihcas"
document.write(`"${reverseString(input2)}"`); // Output: "olleh"