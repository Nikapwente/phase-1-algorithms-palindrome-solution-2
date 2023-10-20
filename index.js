function isPalindrome(word) {

  const str = word; 
  for (let i = 0, j=str.length-1-i; i < str.length/2; i++) { 
      if (str[i] !== str[j]) {
        return false 
      } else {return true} 
      
  };
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
