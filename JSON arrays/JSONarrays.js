/* JSON Array Literals

This is a JSON string:
'["Ford", "BMW", "Fiat"]'

Inside the JSON string there is a JSON array literal:
["Ford", "BMW", "Fiat"] */

/* Arrays in JSON are almost the same as arrays in JavaScript.
In JSON, array values must be of type string, number, object, array, boolean or null.
In JavaScript, array values can be all of the above, plus any other valid JavaScript expression, including functions, dates, and undefined. */

// You can create a JavaScript array from a literal:

// You can create a JavaScript array by parsing a JSON string:
const myarr = '["Hello", "Faizan", "Shaikh"]';
const result = JSON.parse(myarr);
console.log(result[1]);
// You access array values by index:


// Objects can contain arrays:
const myJSON = '{"name":"Faizan", "age":22, "city":["Mumbai", "Pune", "Bangalore", "Dehli"]}';
const res = JSON.parse(myJSON);
console.log(res.city[0]);


// Looping an Array
const myJSON2 = '{"name":"Faizan", "age":22, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON2);

let text = "";
for (let i in myObj.cars) {
  text += myObj.cars[i] + ", ";
}

console.log(text);