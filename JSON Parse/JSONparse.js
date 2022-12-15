/* JSON.parse()
A common use of JSON is to exchange data to/from a web server.

When receiving data from a web server, the data is always a string.

Parse the data with JSON.parse(), and the data becomes a JavaScript object. */




/* Parsing using JSON
Imagine we received this text from a web server: */
'{"name":"faizan", "age":22, "car":"Audi"}';

// Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
const obj = JSON.parse('{"name":"faizan", "age":22, "car":"Audi"}');
console.log(obj);

// Another Example
const car = '{"carName":"Bentley", "carColor":"White", "carModel":"v8"}'
const object = JSON.parse(car);
console.log(object.carName + " " + object.carColor + " " + object.carModel); 

// Parsing a JSON Array.
// When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.
let myarr = '["Hello", "World", "JSON"]';
const result = JSON.parse(myarr);
console.log(result[2]);



// Convert a string into a date object.
const text = '{"name":"Faizan", "DOB":"27-12-1999", "city":"Mumbai"}';
const anObj = JSON.parse(text, function(key, value){
    if (key== "birth") {
        return new Date(value);
    }
    else {
        return value;
    }
});
console.log(anObj.name + " " + anObj.DOB + " " + anObj.city);
// You should avoid using functions in JSON, the functions will lose their scope