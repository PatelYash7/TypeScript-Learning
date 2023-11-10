"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    // {name:string,isPaid:boolean} this is used to pass and object to an function
    console.log("".concat(name, " and ").concat(isPaid));
    name = "Yash";
    isPaid = false;
}
createUser({ name: "Yash", isPaid: true, });
// here in this we cannot pass optional parameter, but by creating a new object we can pass optional parameter
var User = { name: "Yash", isPaid: true, email: 'y@y.com' }; // this can passed to function
createUser(User); // No error 
// Returning an object from function with its return type 
function createCourese() {
    // {} is used to define the return type is object after :
    return { name: "NextJs", price: 200 };
}
test({ name: "hello", isPaid: true });
function test(user) {
    // console.log(user.name);
    return { name: 'yash', isPaid: false };
}
var test1 = {
    _id: "Hello11",
    name: "Yash",
    email: "y@y.com",
    isActive: true
};
// Changing the data of test1 object
test1.name = "Yash11";
