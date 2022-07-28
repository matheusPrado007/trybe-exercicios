
document.getElementById('texto').innerText = 'Com muitos conhecimento adiquiridos e trabalhando com programação';

document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)';

document.getElementsByClassName("center-content")[0].style.backgroundColor = 'white';

document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';

/*document.getElementsByTagName("p")[0].style.textTransform = "uppercase";*/


let upperTxt = document.getElementsByTagName('p');

function upperCase(x) {
    return x.toUpperCase()
}
for (key of upperTxt) {
    key.innerText = upperCase(key.innerText);
}
console.log(document.getElementsByTagName('p')[0].innerText)
console.log(document.getElementsByTagName('p')[1].innerText)
console.log(document.getElementsByTagName('p')[2].innerText)