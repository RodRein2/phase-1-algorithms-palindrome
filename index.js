function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  1. Enter input
  2. Function will determine is stringg(word) is a palindrome
  3. If input is palindrome, output will be true
  4. If input is NOT palindrom, output will be false
*/

/*
Create a function that takes a string and will ggive 1 of 2 results
Use boolean to get output of true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
