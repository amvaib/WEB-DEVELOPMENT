// const user = {
//   username: "amvaib",
//   logincount: 8,
//   signedIn: true,

//   getUserDetails: function(){
//     setTimeout(() => {
//         console.log(`Username : ${this.username}`);
//     }, 3000);
//     console.log("Got details from the database");
    
    
//   }
// };


// console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}


const userOne = new User("amvaib",12,true);
const userTwo = new User("vaibhavgotnobitches",11,false);
console.log(userOne) ;
console.log(userOne.constructor);



