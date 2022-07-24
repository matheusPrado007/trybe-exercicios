//O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24
//
/*1let numbers = [];
let multiplication = 1;

for (let index = 1; index <= 10; index += 1){
numbers.push(index)
}
for(let i = 1; i < numbers.length; i += 1){
    multiplication *= numbers[i];
}
console.log(multiplication)

2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';

let wordInverted = '';

for (let index = 0 ; index < word.length; index += 1){
   wordInverted += word[word.length - 1 - index];
    }
    console.log(wordInverted)*/
    

    let array = ['java', 'javascript', 'python', 'html', 'css'];

    let palavraMaior = array[0];
    let palavraMenor = array[0];


    for (let index = 0 ; index < array.length; index += 1){
       if (array[index].length > palavraMaior.length)
       palavraMaior = array[index]
    }
    for (let index = 0 ; index < array.length; index += 1){
        if (array[index].length < palavraMenor.length)
        palavraMenor = array[index]
     }
     console.log(palavraMaior);
console.log(palavraMenor);