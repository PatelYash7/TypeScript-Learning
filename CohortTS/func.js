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
// function isLegal(person:Person):boolean{
//     if(person.age<18){
//         return false;
//     }
//     return true;
// }
// console.log(isLegal({firstName:"Yash",lastName:"Patel",age:17,gender:"Male"}))
class Employees {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet(phares) {
        console.log("Hello " + this.firstName + " " + this.lastName + " " + phares);
    }
}
const emp1 = new Employees("Yash", "Patel");
emp1.greet("Kaise Hoo vadill");
