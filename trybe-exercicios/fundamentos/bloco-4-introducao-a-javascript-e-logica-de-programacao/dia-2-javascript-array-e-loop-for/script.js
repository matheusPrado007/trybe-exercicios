//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
/*
for(let number of numbers){
    console.log(number)
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let soma = 0;
//for(index = 0; index < numbers.length; index += 1) {
   // soma += numbers[index]
console.log(soma);
}

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for(index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
console.log(soma / numbers.length);
}

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let soma = 0;
for(index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
console.log(soma / numbers.length);
}


if (soma / numbers.length > 20) {
console.log("valor maior que 20")
} else if (soma / numbers.length <= 20){
    console.log("valor menor ou igual a 20")
}








// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let maiorNumero= numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
  maiorNumero = numbers[index];
  }
}
console.log(maiorNumero);*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [6, 10, 4, 20, 70, 8, 100, 2, 36, 28];

let numerosImpares = 0;

for(index = 0; index < numbers.length; index += 1) {
if (numbers[index] % 2 !== 0) {
    numerosImpares += 1; 
} else if(numerosImpares == 0){
    console.log('nenhum valor ímpar encontrado')}
}


console.log(numerosImpares)

