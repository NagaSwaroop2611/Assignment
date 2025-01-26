let string = prompt("Enter a sequence");
  function countVowel(word) {
    let regex = /[aeiou]/i;
    let count = 0;

    for (let i = 0; i < word.length; i++) {
      console.log(word[i], ":", regex.test(word[i]));
      if (regex.test(word[i])) {
        count += 1;
        console.log(word[i], count);
      }
    }
    return count;
  }

  document.write(`Number of Vowels:${countVowel(string)}`);
