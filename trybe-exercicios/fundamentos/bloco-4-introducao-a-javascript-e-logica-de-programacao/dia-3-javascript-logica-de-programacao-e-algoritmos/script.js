//O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24

let numbers = [];
let multiplication = 1;

for (let index = 1; index <= 10; index += 1){
numbers.push(index)
}
for(let i = 1; i < numbers.length; i += 1){
    multiplication *= numbers[i];
}
console.log(multiplication)
