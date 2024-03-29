// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("ASYNC TASK IS COMPLETED");
//         resolve();
//     },1000)
// })

// promiseOne.then((values)=>{
//     const main = setTimeout(()=>{
//         console.log("RUN AFTER 2 SECONDS");
//     },2000)

//     return main;
// }).then((values)=>{
//     setTimeout(() => {
//         console.log(`RUN AFTER 5 SECONDS AND ${values}`);
//     }, 5000);
// })


// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username: "amvaib", email: "hellovaibhavgautam@gmail.com"})
//     },4000);
// });


// promiseThree.then((value)=>{
//     console.log(value);
// })


// const promiseFour = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username: "amvaib", password: "123"})
//         }
//         else{
//             reject(new Error('MAA CHUDAO'))
//         }
//     },1000);
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((user)=>{
//     console.log(user);
// })
// .catch((error)=>{
//     console.log(new Error('HELLO'));
// }).finally(()=>{
//     console.log('THE FINAL STATEMENT IS HERE')
// })

//promise.all();
//WILL GIVE RESULT WHEN ALL PROMISES ARE COMPLETED IF ONE ERROR PURA KHTM

//promise.allSettled();
//WILL GIVE RESULT WHEN ALL PROMISES ARE COMPLETED

//promise.race()----> jo pehle hoga wo run krdega

//promise.any();-- waits for the first promise to fullfill and not rejected;

