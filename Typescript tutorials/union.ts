// it is used to create data type in which we are not sure about the exact data type, used instead of Any type.

let score: number | string 
score=33
score="66"


type User ={
    name:string
    id:number
}

type Admin ={
    userName:string
    id:number
}

let yash: User | Admin={ name:"Yash",id:7754
}
yash={userName:"Yashh11",id:228828288} 


function getDbid(id:number | string){
    if( typeof id === "string"){
        id.toLowerCase(); 
        // we have to narrow down the type, bcz number|string is  unique type it cant be treated individually
    }
}

//Array 

const data :(string|number)[]= ["1","2",3,5]

//Stric allocation
 
let pi:3.14=3.14   
// this only allocates 3.14 to pi variable. 
//use case of this 

let seatAllotment: "aisle"|"middle"|"window"

seatAllotment="aisle";
seatAllotment="window";


export {}