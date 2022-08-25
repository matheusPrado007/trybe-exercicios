const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  const containsA = (array) => array.
  reduce( (acc, curr) => acc + curr.split('').reduce( (a, b) => (b === 'a' || b === 'A' ? a + 1 : a), 0), 0)
  

  
  console.log(containsA(names));