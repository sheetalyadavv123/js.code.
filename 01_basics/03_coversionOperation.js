let score="67abc" //if score=null the result will be zero and if score=undefined the result will be NaN
//if score=true the output will be 1 and if it is false then output will be 1
// console.log(typeof score);

let valueInNumber= Number(score) //we are converting the string in number and the first letter of every datatype in js should be capital
// console.log(typeof valueInNumber );
// console.log(valueInNumber); //NaN=not a number

/*
conversions=>
    "33"=>33
    "33abc"=>NaN
    true=>1
    false=>0
*/

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
//1=>true 0=>false
//" "=>false
//"sheetal"=>true

let someNumber=33
let stringNumber=String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

/**************operations****************/
let value=3
let negValue=-value
console.log(negValue);
console.log(2**3); //this means 2 raise to power 3

let str1="hey"
let str2=" karan"
let str3=str1 + str2
// console.log(str3);

// console.log("2"+ 5);
// console.log(1 +"6");
// console.log("1"+3+5);
// console.log(1+3+"5");

console.log(+true); //true+ is not possible it will trow an error
console.log(+"");//output=0

let gameCounter=39
gameCounter++;//it will give the same output for ++gameCounter
console.log(gameCounter);

//read refix and postfix js mdn document
