const numbers = [ 3, 4, 5, 6, 7];
const output = [];


// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
    
// }

// function square(element){
//     return element * element;
// }

// // arrow function 
// const square = element => element * element;


// maf function 

const result = numbers.map(function(element){
    return element * element;
});

// maf with arrow function 
const display = numbers.map(x => x * x);

// console.log(display);
// console.log(result);


// Filter 
// bigger of 5
const bigger = numbers.filter(x => x > 5);
console.log(bigger);

// smaller of 5
const smaller = numbers.filter(x => x < 5);
console.log(smaller);


// find 

const isThere = numbers.find(x => x > 5);
console.log(isThere);

