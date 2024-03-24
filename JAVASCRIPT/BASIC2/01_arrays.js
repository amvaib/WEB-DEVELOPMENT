const myArr = [0,1,2,3,4,5,6];
const marvel = ["thor", "ironman"];

const mixedArr = myArr.concat(marvel);
// console.log(mixedArr);

// myArr.push(5);
// myArr.pop();

// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join();//converts to string
// console.log(newArr);


// slice, splice

//slice=> change in copy of the array 
//splice=> change in the original array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)


console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
