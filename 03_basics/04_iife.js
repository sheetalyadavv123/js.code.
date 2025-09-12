//Immediately invoked function expression (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();  //iife->()()
//global scope ke pollution se problem hoti hai kayi baar and to remove that pollution we use iife 

(function aurcode(){
    console.log(`DB NOT CONNECTED`);
} )(); //you have use semi colon in the end

((name) =>{
    console.log(`DB NOT CONNECTED ${name}`);
} )(`sheetal`);