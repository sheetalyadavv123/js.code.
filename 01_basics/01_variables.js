const accountId=234567
let accountEmail="sheetal27@gmail.com"
var accountPass="12345"
accountCity="jaipur"
let accountState;

// accountId=2 not allowed 
accountEmail="adcs@gmail.com"
accountPass="6789"
accountCity="bengluru"
/*
   prefer not to use var because of issue in block scope and functional scope
*/
// console.log("accountId");
console.table([accountId,accountEmail,accountPass,accountCity,accountState]);