// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  // ... your code goes here
  let subtotal= quantity.value * price.innerHTML;
  let subtotalTag= product.querySelector('.subtotal span');
  subtotalTag.innerHTML=subtotal;

  return subtotal;
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const oneMoreProduct = document.getElementsByClassName('product');
  let totalPrice = 0

  for(let i = 0; i < oneMoreProduct.length; i++){
    totalPrice += updateSubtotal(oneMoreProduct[i]);
  }

  // ITERATION 3
  //... your code goes here
  const totalElement = document.getElementById("total-value");
  const total = totalElement.getElementsByTagName("span");
  total[0].innerHTML = totalPrice
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

}



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
