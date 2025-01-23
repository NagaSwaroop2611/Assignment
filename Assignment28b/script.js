function splitIntoWords(string) {
  const words = [];
  let currentWord = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // If the character is not a space, add it to the current word
    if (char !== " ") {
      currentWord += char;
    } else {
      // If the character is a space and the current word is not empty, add it to the words array
      if (currentWord) {
        words.push(currentWord);
        currentWord = ""; // Reset the current word
      }
    }
  }

  // Add the last word if the string does not end with a space
  if (currentWord) {
    words.push(currentWord);
  }

  return words;
}

// Test cases
const input1 = "Hello world this is JavaScript";
console.log(splitIntoWords(input1)); // Output: ["Hello", "world", "this", "is", "JavaScript"]

const input2 = "   Leading and trailing spaces   ";
console.log(splitIntoWords(input2)); // Output: ["Leading", "and", "trailing", "spaces"]

const input3 = "Apple banana mango melon";
console.log(splitIntoWords(input3)); // Output: ["SingleWord"]