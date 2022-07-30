function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  

  function createDays() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysId = document.querySelector('#days');
   
  
    for (let index = 0; index < decemberDaysList.length; index += 1) {
      const daysNumbers = decemberDaysList[index];
      const dayListN = document.createElement('li');
     dayListN.innerHTML = daysNumbers;
  
      daysId.appendChild(dayListN);
     dayListN.classList.add('day');
  
    };
  };
  createDays();

  document.getElementsByClassName('day')[25].classList.add('holiday');
  document.getElementsByClassName('day')[26].classList.add('holiday');
  document.getElementsByClassName('day')[32].classList.add('holiday');
  document.getElementsByClassName('day')[5].classList.add('friday');
  document.getElementsByClassName('day')[12].classList.add('friday');
  document.getElementsByClassName('day')[19].classList.add('friday');
  document.getElementsByClassName('day')[26].classList.add('friday');
  

  