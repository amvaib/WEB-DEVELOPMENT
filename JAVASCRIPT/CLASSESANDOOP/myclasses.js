class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}ABC`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


}

const chai = new User("amvaib", "hellovaibhavgautam@gmail.com", "12345");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());