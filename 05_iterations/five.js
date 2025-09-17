//for each loop
const coding=["js","cpp","java","python"]
// coding.forEach( function (item){//in this it is callback function thats why it has no name
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[{
    languageName:"java",
    languageFileName:"java"
},
{
    languageName:"javascipt",
    languageFileName:"js"
},
{
    languageName:"cpp",
    languageFileName:"c++"
}
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})