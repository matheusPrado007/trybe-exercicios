let elementoPai = document.body;
let adcElemento = document.createElement('h1');
let txt = document.createTextNode("Exercício 5.2 - JavaScript DOM ");
adcElemento.appendChild(txt);
elementoPai.appendChild(adcElemento);

let mainTg = document.createElement('main');
elementoPai.appendChild(mainTg);
mainTg.classList.add('main-content');

let section = document.createElement('section');
mainTg.appendChild(section);
section.classList.add('center-content');

let palavra = document.createElement('p');
let txt2 = document.createTextNode('Trabalho difícil');
palavra.appendChild(txt2)
section.appendChild(palavra);

let section2 = document.createElement('section');
mainTg.appendChild(section2);
section2.classList.add('left-content');

let section3 = document.createElement('section');
mainTg.appendChild(section3);
section3.classList.add('right-content');