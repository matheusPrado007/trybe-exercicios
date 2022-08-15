const soma = () => {
     
     const value1 = document.getElementById('value1').value;        
     const value2 = document.getElementById('value2').value;
     const result = Number(value1) + Number(value2);
    if (result) {
         document.getElementById('result').innerHTML = `Resultado: ${result}`;
    } else {
        throw new Error ('Nenhum número digitado')
    }
}

function sum(value1, value2) { 
    try { 
      soma(value2, value2)
    } catch (erro) {
        return document.getElementById('result').innerText = erro.message;
    }
    finally {
       document.getElementById('value1').value = '';
       document.getElementById('value2').value = '';
    } 
  }


  window.onload = () => {
     const button = document.getElementById('button');
     button.addEventListener('click', sum);
  } 
  
