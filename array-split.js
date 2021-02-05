const nums = [1,2,3,4,5,6,7,8,9];

// slice start index and end index 
const part = nums.slice(2,5);
console.log("start and end index slice: ", part);

// splice start index and delete index 
console.log("solid array", nums);
const removed = nums.splice(2,3);
console.log("splice array start index and delete index: ",removed);

// array join 
const together = nums.join(" ");
console.log("join array: ", together);
