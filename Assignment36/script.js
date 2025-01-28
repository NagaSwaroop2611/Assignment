function findFactors(number) {
  if (number <= 0 || !Number.isInteger(number)) {
    return "Please provide a positive integer.";
  }

  const factors = [];
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      factors.push(i); // Add the divisor
      if (i !== number / i) {
        factors.push(number / i); // Add the corresponding pair
      }
    }
  }

  return factors.sort((a, b) => a - b); 
}


let input = +prompt("Enter the number");
console.log(`The factors of ${input} is: ${findFactors(input)}`);