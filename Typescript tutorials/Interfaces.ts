interface User {
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:number
    //defining the method prototype 
    starttrial : () => string
    getcoupon:(couponame:string,name:number)=>number
}

// we can also add the new properties to User interface by again rewriting it 

interface User {
    github:number
}
interface admin extends User{
    role :"admin"|"ta" |"learner"
}
const yash:admin={
    
    dbId:22,
    email:"y@y.com",
    userId:2211,
    // now we have to define the method 
    role:"admin",
    starttrial:()=>{
        return "Hello"
    },
    getcoupon:(couponame,name)=>{
        return 10
    },
    // here we have to again decalare its value
    github:2255
}

export{}

