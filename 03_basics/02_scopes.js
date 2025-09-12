//var c=100 we should avoid using var
// let a=98
// if (true){
//     let a=10
//     const b=30
//     console.log("INNER:",a);
// }
// //when er use {} with if else or function then its scope
// for(let i=0;i<array.length;i++){
//     const element=array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
function one(){
    const username="sheetal"

    function two(){
    const website="insta"
    console.log(username);//it can access the values from first scope
    }
    // console.log(website);//this cannot 

    two()
}
//one()

if(true){
    const username="sheetal"
    if(username=="sheetal"){
        const website="pinterest"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


//***********interesting ***********//
//two syntax of declaring functionand how they are different


addone(5)//this will not throw the error
function addone(num){
    return num+1
}

addTwo(5)//this will throw the error
const addTwo=function(num){
    return num2+2
}


