const person = [{ name: "Faizan", age: 22, weight: "75Kg" },
{ name: "Sameer", age: 23, weight: "62Kg" },
{ name: "Ahmed", age: 23, weight: "95Kg" }, 
{name: "umer", age: 20, weight: "80kg"},{ name: "Faizan", age: 22, weight: "75Kg" },
{ name: "Sameer", age: 23, weight: "62Kg" },
{ name: "Ahmed", age: 23, weight: "95Kg" }, 
{name: "umer", age: 16, weight: "80kg"}];

function myCallback(error, result) {
    if (error) {
        return error
    }
    return result
}
function loopPerson(person, index) {
    if (person.age < 18) {
        return myCallback("Underage")
    }
    if (index == 3) {
        return myCallback("You Are Not Allowed")
    }
    return myCallback(null, person.name)
}
function readAllPerson() {
    const peopleArray =  person.map(loopPerson)
    console.log(peopleArray)
    return peopleArray
}
function takeYourTime(time, functionToRun) {
    setTimeout(()=>{
        return functionToRun()
    }, time)
}
console.log(takeYourTime(3000, readAllPerson))