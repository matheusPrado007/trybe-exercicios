let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(let number of numbers){
    console.log(number)
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for(index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
console.log(soma);
}

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let soma = 0;
for(index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
console.log(soma / numbers.length);
}