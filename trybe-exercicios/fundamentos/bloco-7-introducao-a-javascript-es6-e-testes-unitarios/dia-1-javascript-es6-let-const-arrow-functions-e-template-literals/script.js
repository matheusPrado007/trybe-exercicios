/*function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  const testingScope = (false) ?  `Não devo ser utilizada fora do meu escopo (if)` : `Não devo ser utilizada fora meu escopo (else)`;
  console.log(testingScope);*/

  
   
  const sortOddsAndEvens = () => {
   let = oddsAndEvens = [13, 3, 4, 10, 7, 2];
   return oddsAndEvens.sort((a, b) => a - b);
    
  };
 console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`);
 
  