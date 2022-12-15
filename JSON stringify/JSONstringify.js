/*JSON.stringify()
A common use of JSON is to exchange data to/from a web server.
When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a string with JSON.stringify(). */

// Stringify a JavaScript Object
const obj = {name:"Faizan", age:22, city:"Mumbai"};
const strObj = JSON.stringify(obj);
console.log(strObj);
//result will be a string


// Stringify a JavaScript Array
const obj2 = ["Hello", "World", "My Name is Jeff"];
const arrObj = JSON.stringify(obj2);
console.log(arrObj);


// Storing Data
// When storing data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats.
// JSON makes it possible to store JavaScript objects as text.
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj3 = JSON.parse(text);
console.log(obj3.name);


