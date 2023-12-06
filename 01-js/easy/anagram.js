/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// const _ = require("lodash");

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  function sortString(stringg) {
    return stringg.split("").sort().join("");
  };


  return sortString(str1)==sortString(str2);
  
}

module.exports = isAnagram;
