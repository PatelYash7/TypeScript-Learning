"use strict";
//Good way to write the function.
Object.defineProperty(exports, "__esModule", { value: true });
var func = function (num) {
    // return num+1;
    return "hello";
};
var ans = func(2);
console.log(ans);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('helllo');
//Set the default value 
function isUser(email, password, user) {
    if (user === void 0) { user = true; }
}
isUser('yy', 'gjkaldg');
// Better way to write the function is to mention its return type
function myFunction(myVal) {
    return 20;
    //here only number can be returned from the function    
}
//For arrow functions
var getHello = function (s) {
    return 'Hello';
};
//Here when we use map function it can automaticall analyse the its items from object no need to define the item type,
// we can specify the output type but map function is very deeply defined so all use cases are there.
var items = ['A', 'B', 'C', 'D'];
items.map(function (i) {
    return 'hello';
});
//Never and Void 
function consoleErr(e) {
    console.log(e);
}
function handleErr(e) {
    throw new Error(e); // this means that the code has been terminated from execution
}
