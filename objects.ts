function createUser({name,isPaid}:{name:string,isPaid:boolean}){  //This is type aliasing
    // {name:string,isPaid:boolean} this is used to pass and object to an function
    console.log(`${name} and ${isPaid}`)
    name="Yash"
    isPaid=false;
}
createUser({name:"Yash",isPaid:true,}); 
// here in this we cannot pass optional parameter, but by creating a new object we can pass optional parameter

const User={name:"Yash",isPaid:true,email:'y@y.com'} // this can passed to function
createUser(User); // No error 

// Returning an object from function with its return type 

function createCourese():{ name:string,price:number}{ 
     // {} is used to define the return type is object after :
     
    return {name:"NextJs",price:200}
}


//Type aliasing
type Typo={
    name:string,
    isPaid:boolean
}
test({name:"hello",isPaid:true});
function test(user:Typo):Typo{
    // console.log(user.name);

    return {name:'yash',isPaid:false}
}

//Read-only type in this user can only read the message 

type Test={
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    //Optional 
    credCarddetail? : number
}

let test1:Test={
    _id:"Hello11",
    name:"Yash",
    email:"y@y.com",
    isActive:true
}
// Changing the data of test1 object
test1.name="Yash11"
// test1._id="helkhfaoig"  ,, this gives error bcz id is readonly

//Combining the various type together 

type cardNumber={
    cardnumber:string
}
type cardDate={
    cardDate:string
}
 // here we have combined three objects type into one object
type cardDetail= cardNumber & cardDate &{
    cvv:number
}

export{}