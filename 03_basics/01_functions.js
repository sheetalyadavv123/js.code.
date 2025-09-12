//function mein when you write a big code and you amke a package of it and use it anytime with writing it again and again
function sayHeyy(){
console.log("H");
console.log("E");
console.log("Y");
console.log("Y");
}

//sayHeyy() that how you refer the function

// function addTwo(number1,number2){
//     console.log(number1+number2);
// }
// const result=addTwo(3,7);
// console.log("Result: ",result)//the value is not stored in result when we run that we still get result as undefined


//here we store the value of result(correct method)
function addTwo(number1,number2){
    let result=number1+number2;
    return result;
    console.log("hjjk")//it will never get printed because after you return anything in function nothing will get executed
}
const result=addTwo(4,6)
console.log("Result: ",result)

function loginUserMessage(username="sam"){
    if(username==undefined){
         console.log("Please enter username");
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("sheetal"))
// console.log(loginUserMessage())//when you dont pass any value then the reult will be undefined just logged in 


//when we dont know how many arguments (in shopping cart)
function calculateCartPrice(val1,val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500))//...is spread operatorn as well as rest operator

const user={
    username:"sheetal",
    price:9999
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username:"sam",
    price:499
})

const myNewArray=[200,400,900]
function returnSecondValue(getArray){
     return getArray[2]
}

console.log(returnSecondValue(myNewArray));
