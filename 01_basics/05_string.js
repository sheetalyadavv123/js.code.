const name="sheetal"
const repoCount=12
console.log(name+ repoCount+ " value");
console.log(`hello my name is ${name} and my repo count is${ repoCount}`);
//this (string interpolation) syntax is more readable than tha the other one it is better

//other way to create a string(using new keyword),string is an object
const gameName=new String("hiiiiyyyyy-hi-ki")
// console.log(gameName[0]);
// console.log(gameName.__proto__);//__proto__ is a property (non-standard, but widely supported) that lets you access the prototype of an object.

// //all these (length,toUpperCase are the property of the string object and we can directly use them because of prototype)
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('h')); //learn about all string methods

const newString=gameName.substring(0,3)//3 is not included 
console.log(newString);

const anotherString=gameName.slice(-7,8)//you can pass negative values in the slice it will print them in reverse but substring neglect the negative sign
console.log(anotherString);

const newStringOne="   sheetal    "
console.log(newStringOne.trim());//trim only works on white spaces and line terminators

const url="www://google.com/kjhgf%20yadav"
console.log(url.replace('%20','-'));
console.log(url.includes('jkl'));

//split coverted the string into an arrays and divide it on the basis of -
console.log(gameName.split('-'));




