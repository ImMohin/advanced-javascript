const num = [1,2,-3,4,-5,6,-7,8,9];
for (let i = 0; i < num.length; i++) {
    // const element = num[i];
    
    if (num[i] > 5) {
        break;
    }
    console.log(num[i]);

}

console.log("continue statement");
for (let i = 0; i < num.length; i++) {
    // const element = num[i];
    
    if (num[i] < 0) {
        continue;
    }
    console.log(num[i]);

}