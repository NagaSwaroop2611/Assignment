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

const input1="my name is sachin tendulkar";
console.log(capitalizeWithoutBuiltIn(input1)); // "My Name Is Sachin Tendulkar"

const input2 = "hello world this is javascript";
console.log(capitalizeWithoutBuiltIn(input2)); // Output: "Hello World This Is Javascript"