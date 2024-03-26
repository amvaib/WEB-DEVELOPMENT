// for(let i = 0; i<=10; i++){
//     const element = i;
//     console.log(i);
// }

//PRINTING TABLE FROM 1 TO 10

// for(let i =1; i<=10;i++){
//     for(let j =1; j<=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

let myArr = ["flash","batman","superman"]

for(let i = 0; i<myArr.length; i++){
    const element = myArr[i];
    console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


