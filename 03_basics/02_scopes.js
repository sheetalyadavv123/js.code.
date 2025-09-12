//var c=100 we should avoid using var
let a=98
if (true){
    let a=10
    const b=30
    console.log("INNER:",a);
}
//when er use {} with if else or function then its scope
for(let i=0;i<array.length;i++){
    const element=array[i];
}

console.log(a);
// console.log(b);
// console.log(c);


