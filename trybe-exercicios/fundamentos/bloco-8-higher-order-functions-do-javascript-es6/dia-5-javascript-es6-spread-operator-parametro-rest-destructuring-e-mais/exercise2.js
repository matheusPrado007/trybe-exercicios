const sum = (...rest) => rest.reduce( (acc, curr) => acc + curr );

console.log(sum(4, 5, 6));