// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }


// <, >, <=, >=, ==, !=, ===, !==

const score = 200;

if(score>100){
    let power = "fly";
    console.log(`User Power : ${power}`);
}

// if (balance > 500) console.log("test"),console.log("test2");

const balance = 120

if(balance<500){
    console.log("LESS THAN 500");
} else if(balance<300){
    console.log("LESS THAN 300");
} else {
    console.log("LESS THAN 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

