// With the apply() method, you can write a method that can be used on different objects.
// The apply() method is similar to the call() method 
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

const person = {
    fullName: function(fname, lname) {
      return this.firstName + " " + this.lastName + "," + fname + "," + lname;
    }
  }
  
  const person1 = {
    firstName:"Faizan",
    lastName: "Shaikh"
  }
  console.log(person.fullName.apply(person1,["Hello", "World"]));

  