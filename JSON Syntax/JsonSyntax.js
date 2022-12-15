/* JSON Syntax Rules
JSON syntax is derived from JavaScript object notation syntax:

Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays

JSON Data - A Name and a Value
JSON data is written as name/value pairs (aka key/value pairs).
A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
JSON names require double quotes. */

// JSON
// Example - "name": "Faizan" 

// JavaScript
// Example - name: "Faizan"


/* In JSON, values must be from one of the following datatypes
    string
    number
    boolean
    object 
    array
    null


    In JavaScript values can be from all of the above and including
    function
    date
    undefined
    */



    /*
    JavaScript Objects
Because JSON syntax is derived from JavaScript object notation, very little extra software is needed to work with JSON within JavaScript.
With JavaScript you can create an object and assign data to it, like this: */

const person = {name: "Faizan", age: 22, car: "Audi"};
// you can access JavaScript Objects with
person.name;
or
person["name"];
//Returns Faizan
// you can change the name using
person.name = "Sameer"; 
or
person["name"] = "Sameer";

