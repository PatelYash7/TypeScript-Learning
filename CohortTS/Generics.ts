type Input = string | number;

function firstEl(arr:Input[]){
    return arr[0];
}

const value =firstEl(["hell","You"]) // here we are passing the and array of String but type of Value is showing 
// Input instead of string . so generics

function identity<T>(arg:T){
    return arg;
}

const ot1 =identity<string>("Yash"); //Here now ot1 have type string and ot2 have type number
const ot2 = identity<number>(10);   // we can have different instance from same funciton

//Solution to upper Problem 
function getFirstEl <T>(arr:T[]){
    return arr[0];
}

const el= getFirstEl<string>(["hell","You"]);
const el1 = getFirstEl<number>([1,2,3,4,5]);