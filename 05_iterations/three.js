//for of
// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,4,5]
// for(const num of arr){
//     console.log(num);
// } 

const str="hello world"
for(const greet of str){
    // console.log(`each char is ${greet}`)
}

//maps
const map=new Map()
map.set('IND',"INDIA")
map.set('USA',"united state of america")
map.set('FR',"FRANCE")
console.log(map) //map only store unique values and it will always be in the order in which we inserted the values

for(const [key,value] of map){
    //console.log(key, ':-',value);
}

const myObject={
    game1:'NFS',
    game2:'spiderman'
}

for(const [key,value] of myObject){
    console.log(key, ':-',value); //output-myObject is not iterable
}
//for iteration you need to use for in loop


