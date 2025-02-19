// //encryption system for a messaging app.
function sumDigits(n) {
  n = n.toString();
  n = n.split("").map((num) => parseInt(num));
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum = sum + n[i];
  }
  return sum;
}
function power(base, exponent) {
  let product = 1;
  for (let e = 1; e <= exponent; e++) {
    product *= base;
  }
  return product;
}
function reverseWords(sentence) {
  //   sentence = sentence.split(" ");
  //   let firstWord;
  //   let secondWord;
  //   let thirdWord;
  //   let word = 0
  //   firstWord = sentence[word];
  //   secondWord = sentence[word + 1];
  //   thirdWord = firstWord
  //   firstWord = secondWord;
  //   secondWord = thirdWord ;
  let curr;
  let prev;
  let next;
  if (sentence.length > 0) {
    for (let i = 0; i < sentence.length; i++) {
      for (let j = 1; j < sentence.length; j++) {
        prev = sentence[i];
        next = sentence[j];
        curr = prev;
        prev = next;
        next = curr;
        return sentence
      }
    }
  }

//   sentence = [...firstWord, ...secondWord];
}
// console.log (sumDigits(103));
// console.log(power(6,2));
console.log(reverseWords("Hello World"));

//RECUSION  IS LESS EFFICIENT THAN   ITERATION WHEN HANDLING THE LARGE AMOUNT OF INPUT (WHETHER NUMBERS OR STRINGS)
function sumDigit(n) {
  n = n.toString();
  n = n.split("").map((num) => parseInt(num));
  return n.reduce((num1, num2) => num1 + num2);
}

console.log(sumDigit(23));
