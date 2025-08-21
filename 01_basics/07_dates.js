//dates
let now = new Date();
// console.log(now);//2025-08-21T19:49:50.602Z
// console.log(now.toString());//Thu Aug 21 2025 19:49:50 GMT+0000 (Coordinated Universal Time)
// console.log(now.toDateString());//Thu Aug 21 2025
// console.log(now.toISOString());//2025-08-21T19:49:50.602Z
// console.log(now.toJSON());//2025-08-21T19:49:50.602Z
// console.log(now.toLocaleDateString());// 8/21/2025
// console.log(now.toLocaleTimeString());//7:49:50 PM

// console.log(typeof now); //object

// let myCreatedDate=new Date(2025,0,24);
// console.log(myCreatedDate);//output-2025-01-24T00:00:00.000Z
// console.log(myCreatedDate.toDateString());//Fri Jan 24 2025

// let CreatedDates=new Date(2025,0,24,5,3);

// console.log(CreatedDates.toLocaleString());//1/24/2025, 5:03:00 AM

// let date=new Date("01-14-2025")
// console.log(date.toLocaleString());//1/14/2025, 12:00:00 AM

// let myTimeStamp=Date.now();//it is used when we design quiz and contest
// console.log(myTimeStamp);//1755807125345
// console.log(date.getTime());//1736812800000
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getMonth());
//`${newDate.getDay()} and the time is`

newDate.toLocaleString(`default`,{
    weekday:"long",
    
})








