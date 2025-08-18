//there are two types of memories heap(non primitive) and stack(primitive)
//stack->copy, heap->reference
let myName="sheetal"
let anotherName=myName
anotherName="nancy"
console.log(myName);
console.log(anotherName);

let userOne={
    email:"email@124",
    upi:"user@oksbi"

}
let userTwo=userOne
userTwo.email="sheetal@123"
console.log(userOne.email);
console.log(userTwo.email);