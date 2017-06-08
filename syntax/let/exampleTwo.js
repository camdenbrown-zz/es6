//So, if we do the following it will throw a reference Error
{
  let productId = 1221;
}
console.log(productId); //undefined

//The code gets evaluated, so when you call the function productId is declared
// and is set to 12
function updateProductId() {
  productId = 12;
}
let productId = null;
updateProductId();
console.log(productId);

// The for loop productId is scoped to its block and not outside of it
let productId = 42;
for (let productId = 0; productId < 10; productId++){

}
console.log(productId); // 42
