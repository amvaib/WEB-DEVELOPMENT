// const myTotal = myNums.reduce((acc,curr) => acc+curr , 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 8888
    },
    {
        itemName: "mobile dev course",
        price: 7899
    },
    {
        itemName: "data science course",
        price: 3999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price , 0)

console.log(priceToPay);