

// reduce 

const numbers=[20,12,17,18,19,20,14,15];
const average=numbers.reduce((total,current)=> total + current ,0)/numbers.length;
const final=average.toFixed(2);
console.log(`Your average is ${final}`);



