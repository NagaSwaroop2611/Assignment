let string = prompt("Enter a sequence");
  function palindrome(sequence) {
    let flag = true;
    let length = sequence.length;
    for (let i = 0; i < length / 2; i++) {
      //racecarconsole.log(sequence[i], sequence[length - i - 1])
      if (sequence[i] !== sequence[length - i - 1]) {
        flag = false;
      }
    }
    if (flag === true) {
      return "palindrome";
    }
    else {
      return "Not palindrome";
    }
  }

  document.write(palindrome(string));