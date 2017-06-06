'use strict';
//Returns a reference error,
//so it no longer does undefined because of hoisting
console.log(productId); //Reference Error
let productId = 12;

//Due to Block scoping in ES6,
//the var inside a scope will 'disappear' at the end of a block
//leaving the productId still set to 12
let productId = 12;
{
  let productId = 2000;
}
console.log(productId); // 12


//So, if we do the following it will throw a reference Error
{
  let productId = 1221;
}
console.log(productId); //undefined
