//reduce method 
const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc, current){
//     console.log(`acc:${acc} and current val is ${current}`);
    
//     return acc + current
// },0)

const myTotal=myNums.reduce( (acc,current)=>acc+current,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"java course",
        price:1999
    },
    {
        itemName:"DS course",
        price:2999
    }
]

const totalAmount=shoppingCart.reduce( (acc,item)=>acc + item.price,0)
console.log(totalAmount);
