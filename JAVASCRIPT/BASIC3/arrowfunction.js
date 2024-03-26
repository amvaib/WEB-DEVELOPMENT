const user = {
    username: "vaibhav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to the Website`);
    }
}


// user.welcomeMessage();

// const chai = function(){
//     let username = "amvaib";
//     console.log(this.username);
// }

// const chai = () => {
//     let username= "amvaib";
//     console.log(this.username);
// }

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwoNum = (num1,num2) => (num1+num2);

//{} this results in writing return
// without {} we can return with writing return



const addTwo = (num1,num2) => ({username: "amvaib"})


console.log(addTwo(2,3));

const myArr = [2,4,5,6,7,8]

