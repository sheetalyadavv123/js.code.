// singleton-when we declare object with constructor then singleton will be formed

//object literals
//Object.create ->constructor method

const mySymbol=Symbol("key1")

const jsUser={
    name:"sheetal",//in object there are key value pairs
    age: 20,
    [mySymbol]:"mykey1",//its syntax of defining a symbol in an object
    location:"delhi",
    email: "www.google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday","Saturday"]
}
//how to access object
// console.log(jsUser.email);
// console.log(jsUser["email"]);//we should prefer this method 
// console.log(jsUser[mySymbol]);

jsUser.email="sheetal@goole.com"//it changes the email
// Object.freeze(jsUser)
jsUser.email="sheetal@canva.com"
// console.log(jsUser.email);

jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


