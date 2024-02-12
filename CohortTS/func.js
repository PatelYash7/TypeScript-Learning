"use strict";
function hello(name) {
    console.log("Hello " + name);
}
hello("Yash");
function sum(num1, num2) {
    return num1 + num2;
}
const sum12 = sum(2, 4);
console.log(sum12);
function isLegal(person) {
    if (person.age < 18) {
        return false;
    }
    return true;
}
console.log(isLegal({ firstName: "Yash", lastName: "Patel", age: 17, gender: "Male" }));
