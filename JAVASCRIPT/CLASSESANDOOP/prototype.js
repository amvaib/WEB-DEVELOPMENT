let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`SPIDEY POWER IS ${this.spiderman}`);
    }
}

Object.prototype.amvaib = function(){
    console.log("VAIBHAV IS EVERYWHERE");
}

Array.prototype.heyVaib = function(){
    console.log(`vaibhav says hello`);
}

heroPower.amvaib();



//Inheritance

const User = {
    name: 'vaibhav',
    email : "hellovaibhavgautam@gmail.com"
}

const Teacher = {
    makeVideo:true
}

const teachingSupport = {
    isAvailable:true
}

const TAsupport = {
    makeAssignment : `JS ASSIGNMENT`,
    fullTime : true,
    // __proto__: teachingSupport

}


Object.setPrototypeOf(teachingSupport,TAsupport);
let anotherUsername = "mwahvaib                                 ";

String.prototype.trueLength = function(){
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"hello".trueLength();
