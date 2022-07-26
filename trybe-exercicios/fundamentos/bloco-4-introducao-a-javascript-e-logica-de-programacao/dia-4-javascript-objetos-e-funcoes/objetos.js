//Exercicio 1-
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


  console.log('Bem-vinda, ' + info.personagem);

  //Exercicio 2 -

  info.recorrente = 'sim';

  console.log(info)

  //Exercicio 3 -

  for (let key in info){
    console.log(key);
  }

  //Exercicio 4 -

  for (key in info){
    console.log(info[key] );
  }

//Exercicio 5-

  let infor = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };
  console.log(info.personagem,' ','e',' ',infor.personagem)
  console.log(info.origem,' ','e',' ',infor.origem)
  console.log(info.nota,' ','e',' ',infor.nota)
  console.log('Ambos recorrentes')