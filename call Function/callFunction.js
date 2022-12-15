const detail = {
    fullName: function() {
        return this.firstname + " " + this.lastname;
    }
}
const person1 = {
    firstname: "Faizan",
    lastname: "Shaikh"
}
const person2 = {
    firstname: "Sameer",
    lastname: "Chaudhry"
}
console.log(detail.fullName.call(person1));

//With the call() method, you can write a method that can be used on different objects.

