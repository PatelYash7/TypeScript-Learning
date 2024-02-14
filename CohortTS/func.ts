function hello(name:string){
    console.log("Hello "+name );
}
hello("Yash");

function sum(num1:number,num2:number):number {
    return num1+num2;
}
const sum12:number =sum(2,4)
console.log(sum12);

interface Person{
    firstName:string;
    lastName:string;
    // age:number;
    // gender:string;
    greet(phares:string):void;
}

// function isLegal(person:Person):boolean{
//     if(person.age<18){
//         return false;
//     }
//     return true;
// }
// console.log(isLegal({firstName:"Yash",lastName:"Patel",age:17,gender:"Male"}))

class Employees implements Person{
    firstName: string;
    lastName: string;
    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    greet(phares: string): void {
        console.log("Hello "+this.firstName+" "+this.lastName+" "+phares);
    }
}
const emp1 = new Employees("Yash","Patel");
emp1.greet("Kaise Hoo vadill")