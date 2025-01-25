function insertStringWithoutInbuilt(baseString, insertString, position) {
  // Ensure the position is within valid bounds
  if (position < 0 || position > baseString.length) {
    return "Position out of bounds.";
  }

  // Manually create the new string
  let result = "";
  for (let i = 0; i < baseString.length; i++) {
    if (i === position) {
      result += insertString+" "; // Add the string to be inserted at the position
    }
    result += baseString[i]; // Add the current character
  }

  // If inserting at the end
  if (position === baseString.length) {
    result += insertString;
  }

  return result;
}

// Test cases
const base1 = "Hello World!";
const insert1 = "Beautiful";
const position1 = 6;
console.log(insertStringWithoutInbuilt(base1, insert1, position1));
// Output: "Hello Beautiful World!"

const base2 = "Hi how are you?";
const insert2 = "Good morning";
const position2 = 3;
console.log(insertStringWithoutInbuilt(base2, insert2, position2));
// Output: "JavaScript is awesome"

const base3 = "OpenAI";
const insert3 = "ChatGPT";
const position3 = 0;
console.log(insertStringWithoutInbuilt(base3, insert3, position3));
// Output: "ChatGPT OpenAI"