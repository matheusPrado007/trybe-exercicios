//1 - 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let elementoPai = document.body;
let adcElemento = document.createElement('h1');
let txt = document.createTextNode("Exercício 5.2 - JavaScript DOM ");
adcElemento.appendChild(txt);
elementoPai.appendChild(adcElemento);
adcElemento.classList.add('title')
// 2 - 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let mainTg = document.createElement('main');
elementoPai.appendChild(mainTg);
mainTg.classList.add('main-content');
// 3 - 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let section = document.createElement('section');
mainTg.appendChild(section);
section.classList.add('center-content');

let palavra = document.createElement('p');
let txt2 = document.createTextNode("Lugares lindos");
palavra.appendChild(txt2);
section.appendChild(palavra);

let section2 = document.createElement('section');
mainTg.appendChild(section2);
section2.classList.add('left-content');

let section3 = document.createElement('section');
mainTg.appendChild(section3);
section3.classList.add('right-content');

let img = document.createElement('img');
section2.appendChild(img);
img.src = 'https://picsum.photos/200 '
img.classList.add('small-image');

let list = document.createElement('ul');
section3.appendChild(list);

let text3 = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < text3.length; index++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(text3[index]));
    list.appendChild(li);
}

let h3A = document.createElement('h3');
mainTg.appendChild(h3A);
h3A.classList.add('description');

let h3B = document.createElement('h3');
mainTg.appendChild(h3B);
h3B.classList.add('description');

let h3C = document.createElement('h3');
mainTg.appendChild(h3C);
h3C.classList.add('description');


 



 

  
       
      
    

    
   