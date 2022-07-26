
/*function verificaPalindrome(palindrome) {
    let reverse = palindrome.split('').reverse().join('');
    if (reverse === palindrome) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara')); 
  console.log(verificaPalindrome('desenvolvimento')); 



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

  let indiceMenor = 0;
let valor = [2, 4, 6, 7, 10, 0, -3];
  function indiceM(){
    for(let indice in valor){
        if (valor[indiceMenor] > valor[indice]){
           indiceMenor = indice;
        }
    }
    return indiceMenor
  }
  
  console.log(indiceM([2, 4, 6, 7, 10, 0, -3]))*/


  let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
  let nome = nomes[0];

  function maiorNome (nomes){
    for (let i in nomes){
        if(nome.length < nomes[i].length){
           nome = nomes[i]
    }
    
  } return nome;
}


  console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
