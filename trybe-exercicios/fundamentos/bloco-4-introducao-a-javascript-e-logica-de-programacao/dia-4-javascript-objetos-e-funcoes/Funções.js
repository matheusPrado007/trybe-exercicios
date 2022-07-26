
/*function verificaPalindrome(palindrome) {
    let reverse = palindrome.split('').reverse().join('');
    if (reverse === palindrome) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara')); 
  console.log(verificaPalindrome('desenvolvimento')); */

let indiceMaior = 0;
let valor = [2, 3, 6, 7, 10, 1];
  function indiceM(){
    for(let indice in valor){
        if (valor[indiceMaior] < valor[indice]){
           indiceMaior = indice;
        }
    }
    return indiceMaior
  }
  
  console.log(indiceM([2, 3, 6, 7, 10, 1])) 