function longestWord(string) {
    string = string.split(" ");
    //console.log(string);
    let length = 0
    let longWords = [];
    for (let word of string) {
      if (word.length > length) {
        longWords = [];
        //console.log(length, word.length);
        longWords.push(word);
        length = word.length;
      }
      else if (word.length === length) {
        longWords.push(word);
        length = word.length;
      }
    }
    return longWords.join(" ");
  }
  input1 = "Sample Arguments goes here";
  console.log(`Output : ${longestWord(input1)}`);

  input2 = "Hello All How Are You All Doing";
  console.log(`Output : ${longestWord(input2)}`);