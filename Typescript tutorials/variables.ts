let greet:String="Hello,Duniya";
console.log(greet);

// Numbers
let userId:number=23;
console.log(userId.toString())

//String 
let isLoggedIn:boolean=false;
console.log(isLoggedIn);

//Any examples 

let check:any=10; // This disables the type checking 
function setCheck(){
    return 'hello'
}
check=setCheck();

export{}    