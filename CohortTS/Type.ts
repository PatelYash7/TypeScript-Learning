type User ={
    firstname:string;
    lastname:string;
    age:number;
}

//Main difference between type and interface is that we can implements 
// classes from interface but not from type


//In type we can use Union and Intersection

//We have to use Interface in most of the cases, and type is used when we want to use intersection and Union
type greetArg = string | number;

function greet(arg:greetArg):void{

}

type Employee ={
    name:string;
    startDate:Date;
}
interface Manager {
    name:string
    department:string;
}
type TechLead = Employee & Manager;

const t:TechLead = {
    name:"Yash",
    startDate:new Date(),
    department:"HR"
}