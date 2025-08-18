//Primitive datatypes
//7 types: String,Number,Boolean,Null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false 
const outsideTemp=null
let userEmail; //it is undefined
const id=Symbol('123')
const anotherId=Symbol('123')
//we pass the value in both the functions but we will get the different result because of Symbol dataType
//js is dynamically typed language because it is not necessery to declare variable type
console.log(id===anotherId);
const bigNumber=23445679988766n;


//Reference type(non primitive)
//arrays,objects,functions
const color=["yellow","blue","green"] //array

{
    //we write objects in key value pairs
    name:"sheetal",
    age=20,
}

const myFunction=function(){
    console.log("sabrina");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp); 
//return type of all the non primitive datatype is object except function ,its return type is function object


