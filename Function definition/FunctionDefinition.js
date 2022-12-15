var x = myFunction(10, 20);
console.log(x);

function myFunction(a , b) {
    return a * b ;
}

const y = function(a, b) {
    return a + b;
}
console.log(y(77, 33));
// After a function has been stored in a variable,the variable can be used as a function:

//using new keyword
const z = new Function("a", "b", "return a * b");
console.log(z(12, 34));


const addition = function(a, b) {
    return a + b;
}
console.log(addition(5,10));

//can be written as
const subtraction = (a,b) => a - b;
console.log(subtraction(10, 5));

