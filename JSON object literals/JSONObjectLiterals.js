// This is a JSON string:
// '{"name":"John", "age":30, "car":null}'

// Inside the JSON string there is a JSON object literal:
// {"name":"John", "age":30, "car":null}

/* JSON object literals are surrounded by curly braces {}.
JSON object literals contains key/value pairs.
Keys and values are separated by a colon.

Keys must be strings, and values must be a valid JSON data type:
string
number
object
array
boolean
null
Each key/value pair is separated by a comma. */

// You can create a JavaScript object from a JSON object literal:
const myObj = {"name":"John", "age":30, "car":null};
console.log(myObj.name);

// Normally, you create a JavaScript object by parsing a JSON string:
const myJSON = '{"name":"John", "age":30, "car":null}';
myObject = JSON.parse(myJSON);
console.log(myObject);

// Looping Object Properties
const myJSON2 = '{"name":"John", "age":30, "car":null}';
myObject2 = JSON.parse(myJSON2);
let text = " ";
for (const x in myObject2) {
    text += x + ", ";
}
console.log(text);

// Looping JavaScript Object Values
const myJSON3 = '{"name":"John", "age":30, "car":null}';
myObject3 = JSON.parse(myJSON3);
let text2 = " ";
for (const x in myObject3) {
    text2 += myObject3[x] + ", ";
}
console.log(text2);
