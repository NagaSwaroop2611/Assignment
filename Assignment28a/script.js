function removeCharacters(inputString, startIndex, count) {
  let result = ""; // Initialize an empty string for the result

  // Iterate through the string
  for (let i = 0; i < inputString.length; i++) {
    // If the current index is outside the range to remove, add it to the result
    if (i < startIndex || i >= startIndex + count) {
      result += inputString[i];
    }
  }

  return result;
}

// Test cases
const string1 = "Hi How are You?";
const startIndex1 = 2;
const count1 = 4;
document.write(removeCharacters(string1, startIndex1, count1)); // Output: "Hi are You?"
document.write("</br>");

const string2 = "Welcome";
const startIndex2 = 0;
const count2 = 2;
document.write(removeCharacters(string2, startIndex2, count2)); // Output: "lcome"
document.write("</br>");