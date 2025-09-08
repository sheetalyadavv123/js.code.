//const tinderUser=new Object();
const tinderUser={}
tinderUser.id="fsjsk"
tinderUser.name="geetika"
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName: {
        userfullname:{
            firstName:"geetika",
            lastName:"yadav"
        }
    }

}
//console.log(regularUser.fullName.userfullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({} ,obj1,obj2)//{}->optional 
// console.log(obj3);

const obj3={...obj1, ...obj2}//...spread operator
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//there are many objects in array(generally in databases)
const users=[
    {
        id:1,
        email:"ghjy@123"
    }
]

// users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//the result will be in the array//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//every key value pair will be in the different arrays and all these arrays will be in on array//[ [ 'id', 'fsjsk' ], [ 'name', 'geetika' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));