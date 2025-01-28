const input = prompt("Enter the string");

const result = input.replace(/^\s+|\s+$/g, "");

console.log(result);