const price =  document.getElementById('price');
const tax = document.getElementById('tax');
const btn = document.getElementById('btn');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');

btn.addEventListener('click', function() {
  result1.textContent = `Price Before Tax = $ ${Number(price.value).toFixed(2)}`;
  result2.textContent = `Sales Tax (${tax.value}%) = $ ${computeSalesTax().toFixed(2)}`;
  result3.textContent = `Total Price Including Tax = $ ${computeToatalPrice()}`;
})

function computeSalesTax() {
  return price.value * (tax.value / 100);
}

function computeToatalPrice() {
  return Number(price.value) + computeSalesTax();
}