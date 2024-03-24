// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "vaibhav"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "vaibhav",
            lastName: "gautam"
        }
    }
}


const fname = new String(regularUser.fullName.userFullName.firstName);

// console.log(fname.toLocaleUpperCase());

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}


// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj4 = {...obj1 , ...obj2 , ...obj3}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

console.log(tinderUser);

//results in array
console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//destructuring and JSON

const course = {
    courseName: "mathematics",
    price: "233",
    courseInstructor: "vaibhav"
}

const {courseInstructor: teacher} = course;

console.log(teacher.toLocaleUpperCase());





