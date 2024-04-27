"use strict";
let firstName = "Dhananjay"; // type string
console.log(firstName);
let w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
const names = [];
names.push("Type"); // no error
names.push("Script"); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment 
numbers.push(2); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(numbers);
let head = numbers[0]; // no error
console.log(head);
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);
// define our tuple
let ourTuple1;
// initialize correctly
ourTuple1 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple1.push('Something new and wrong');
console.log(ourTuple1);
// define our tuple
let ourTuple2;
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');
// instead use our readonly tuple
const ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple2.push('Coding God took a day off');
// Try playing around with modifying properties and adding ones to see what happens
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
