
function verificaPalindrome(palindrome) {
    let reverse = palindrome.split('').reverse().join('');
    if (reverse === palindrome) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara')); 
  console.log(verificaPalindrome('desenvolvimento')); 