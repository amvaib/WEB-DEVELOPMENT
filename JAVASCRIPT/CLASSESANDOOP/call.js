function setUsername(username){

    this.username = username;
    console.log('CALLED');

}

function createUser(username , email, password){
    setUsername.call(this,username)
    this.email = email;
    this.password = password;

}


const chai = new createUser("amvaib", "hellovaibhavgautam@gmail.com", "12345");

console.log(chai);