// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

// Async Syntax
// The keyword async before a function makes the function return a promise:
import fetch from "node-fetch"
import fs from "fs";
import { fileTypeFromBuffer } from "file-type";

// a Promise Function
function myFunction() {
    return Promise.resolve("Hello");
}
console.log(myFunction());

// async Function
async function mynewFunc() {
    return ("Faizan Shaikh");
}
console.log(mynewFunc());




//async/await
function display(result) {
    console.log(result);
}
async function readData() {
    return "This is an async function";
}
readData().then(
    function (value) {
        display(value);
    },
    function (error) {
        display(error);
    }
);


// Await Syntax
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

async function displayResult() {
    let myPromise = new Promise(function (resolve, reject) {   //The two arguments (resolve and reject) are pre-defined
        resolve("This is an async await function");
    });
    // We will not create them, but call one of them when the executor function is ready.
    // Very often we will not need a reject function.
    console.log(await myPromise);
}
displayResult();


async function Timeout() {
    let aPromise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("This is a set timeout async await function");
        }, 3000);
    });
    console.log(await aPromise);
}
Timeout();







async function getFile() {
    // returning a promise
    return new Promise(
        function (resolve, reject) {
            let buffer //this is the image buffer for saving
            fetch("https://http.cat/404.jpg").then((response) => { // this is the api call to http.cat
                return response.arrayBuffer() // http.cat responds with an array buffer
            }).then((arrayBuffer) => {
                buffer = Buffer.from(arrayBuffer); // creating an file buffer from the array buffer recived
                return fileTypeFromBuffer(buffer); // try to guess the file type of the recived buffer
            }).then((fileType) => {
                if (fileType.ext) { // checking if we got an extiction
                    const outputFileName = `404cat.${fileType.ext}` // setting the file name to save
                    fs.createWriteStream(outputFileName).write(buffer);
                    resolve("file saved")
                } else {
                    console.log('File type could not be reliably determined! The binary data may be malformed! No file saved!')
                    reject("Unable to save")
                }
            })
                .catch((error) => {
                    console.log(error)
                    reject(error)
                })
        });
}

getFile();




