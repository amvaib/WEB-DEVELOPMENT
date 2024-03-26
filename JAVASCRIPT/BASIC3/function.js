function sayMyName(n) {
  console.log(`HELLO ${n} , nice to meet you!`);
}

// sayMyName("Vaibhav")

function addTwoNumbers(num1, num2) {
  // console.log(num1+num2);
  return num1 + num2;
}

const result = addTwoNumbers(2, 3);

// console.log(result);

function loginUserMessage(username = "amvaib") {
  if (!username) {
    //username === Undefined
    console.log("Please Enter a Valid Username!");
    return;
  }
  return `USER-${username} just logged in`;
}

// console.log(loginUserMessage("amvaib"));

function calculateCartPrice(val1,val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200,200, 500, 400,300));



function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and prices is ${anyobject.price}`)
}

const user = {
    username: "vaibhav",
    price: 199
}


// handleObject({
//     username: "sam",
//     price: 399
// })


// handleObject(user);

const myNewArray = [200,300,400,500];

function returnSecondValue(getArray){
    return getArray[0];
}

// console.log(returnSecondValue(myNewArray));


console.log(returnSecondValue([9999,300,400,500,1000]));

