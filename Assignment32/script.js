function capitalizeWithoutBuiltIn(string) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (capitalizeNext && char !== ' ') {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }

    if (char === ' ') {
      capitalizeNext = true;
    }
  }

  return result;
}

const string = prompt("Enter a string");
document.write(capitalizeWithoutBuiltIn(string));