const jsUser = {
    name: "VAIBHAV",
    "full name": "VAIBHAV GAUTAM",
    age: 19,
    location: "Delhi",
    email: "vaibhavlovescode@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(jsUser.name);
console.log(jsUser["full name"]);
console.log(jsUser["email"]);

jsUser.email = "hellovaibhavgautam@gmail.com";

// Object.freeze(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}


// console.log(jsUser);

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


