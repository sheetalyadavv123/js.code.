const user={
    username:"sheetal",
    price: 1000,

    welcomeMessage:function(){
         console.log(`${this.username}, welcome to website`);//this refers to the current context
         //console.log(this);
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this);//output will be empty {} 

// function chai(){
//     let username="sheetal"
//     console.log(this.username);//in this way we can not use this in fffunction it works only in objects
// }
// chai()

const chai= () =>{
    let username="sheetal"
    console.log(this.username);
}
//chai()
//read about the difference between aaray function and normal function

// const addTwo=(num1,num2) => {
//     return num1+num2
// }

//emplicit return
const addTwo=(num1,num2) => (num1+num2)//when we use {} we need to write return keyword but when we use () we do not
console.log(addTwo(3,4));

