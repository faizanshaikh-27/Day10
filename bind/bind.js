// With the bind() method, an object can borrow a method from another object.
// The example below creates 2 objects (person and member).
// The member object borrows the fullname method from the person object:

const person = {
    firstName: "Faizan",
    lastName: "Shaikh",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Sameer",
    lastName: "Chaudhry"
}

let fullName = person.fullName.bind(member);
console.log(fullName());
