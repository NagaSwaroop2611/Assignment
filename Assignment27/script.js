function scrambleWord(string, positions) {
  // Split the input string into an array of characters
  const charArray = string.split('');
  // Create an empty array to store the scrambled result
  const scrambledArray = [];

  // Map each character to its new position based on the positions array
  positions.forEach((newPosition, index) => {
    
    scrambledArray[index] = charArray[newPosition];
    console.log(newPosition);
    console.log(scrambledArray[newPosition], charArray[index]);
  });

  // Join the scrambled array back into a string
  return scrambledArray.join('');
}

// Test cases
const input1 = "abcd";
const positions1 = [3, 1, 0, 2];
document.write("Output: ", scrambleWord(input1, positions1));// Output: dbac
document.write("</br>");

const input2 = "AWS";
const positions2 = [1, 2, 0];
document.write("Output: ", scrambleWord(input2, positions2)); // Output: WSA
document.write("</br>");
