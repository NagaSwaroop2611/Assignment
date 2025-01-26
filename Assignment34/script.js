  function findDatesInString(inputString) {
  // Regular expression to match dates in common formats (DD/MM/YYYY, MM-DD-YYYY, YYYY-MM-DD, etc.)
  const dateRegex = /\b(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}|\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2})\b/g;
  
  // Match all occurrences of the date pattern
  const matches = inputString.match(dateRegex);
  // console.log(matches);
  // Check if any dates were found
  if (matches) {
    return `Dates in the string are:\n${matches.join('\n')}`;
  } else {
    return "No dates found in the string.";
  }
}

const input1 = prompt("Enter the string");
console.log(findDatesInString(input1));