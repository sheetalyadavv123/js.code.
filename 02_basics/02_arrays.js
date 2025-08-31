const cars=["thar","SUV","kia"]
const bike=["ab","cd","ef"]

// cars.push(bike)
// console.log(cars);//[ 'thar', 'SUV', 'kia', [ 'ab', 'cd', 'ef' ] ]
// console.log(cars[3][1]);

// const allVehicles= cars.concat(bike)//concat combines two arrrays and return new array w/out modifying any existing array
// console.log(allVehicles);//[ 'thar', 'SUV', 'kia', 'ab', 'cd', 'ef' ]

const all_vehicles=[...cars, ...bike]//do same as concat and known as spread operator
// console.log(all_vehicles);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("sheetal"))
console.log(Array.from("sheetal"))
console.log(Array.from({name:"sheetal"}))//will give an empty array

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));


