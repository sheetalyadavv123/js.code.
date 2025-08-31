//array
const myArr=[1,1,2,3,4,5,6] //javascript arrays are resizable
//array elements can not be accessed using arbitary string as indexes eg-"one"
console.log(myArr[0])
const myCar=["kia seltos","ferrari","lamborgini"]

//another way to create an array in js
const myArr2=new Array(1,2,3,4)
//array-copy operation create shallow copies rather than deep copies
//shallow copy-copy whode properties share the same references as those of the source object from which the copy was made
//deep copy-dont share the same references


//array methods
// myArr.push(6) //push is used to add elements
// myArr.pop()//we dont need to pass any argument in pop it automatically removes the last element

// myArr.unshift(9)//it add the element in the start
// myArr.shift()//removes the first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

// const newArr=myArr.join()//.join adds all the elements of an aaray into a string 
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice
console.log("A ",myArr);

const myn1=myArr.slice(1,3)//slice return a section of an array
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

//splice manipulates the original aaray but slice does not 
