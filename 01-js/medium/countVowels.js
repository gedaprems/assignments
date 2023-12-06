/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let newStr = str.toLowerCase();
    let count = 0;
    let n = str.length;
    for(let i=0; i<n; i++){
      let ch = newStr.charAt(i);
      if(ch=='a' || ch == 'e' || ch=='i' || ch == 'o'|| ch=='u' || ch == 'A' || ch=='E' || ch == 'I' || ch=='O' || ch == 'U'){
        count++;
      }
    }

    return count;
}

module.exports = countVowels;