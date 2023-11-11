//Good way to write the function.

const func=(num:number)=>{
    // return num+1;
    return "hello"
}
let ans=func(2);
console.log(ans)


function getUpper(val:String){
    return val.toUpperCase();
}
getUpper('helllo')

//Set the default value 

function isUser(email:string,password:string,user:boolean=true){

}
isUser('yy','gjkaldg');



// Better way to write the function is to mention its return type

function myFunction(myVal:number):number{

    return 20;
    //here only number can be returned from the function    
}

//For arrow functions

const getHello=(s:string):string =>{
    return 'Hello'
}

//Here when we use map function it can automaticall analyse the its items from object no need to define the item type,
// we can specify the output type but map function is very deeply defined so all use cases are there.

const items=['A','B','C','D'];

items.map((i :string ) : string  =>{
    return 'hello'
})


//Never and Void 

function consoleErr(e:string):void{
    console.log(e);
}
function handleErr(e:string): never{
    throw new Error(e)  // this means that the code has been terminated from execution
}

export{}