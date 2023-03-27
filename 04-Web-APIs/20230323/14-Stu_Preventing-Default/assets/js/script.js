var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

var tipRes = document.querySelector("#tip-amount");
var Total = document.querySelector("#new-total");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  event.preventDefault();

  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  

  tipRes.textContent = tipAmount;
  Total.textContent = newTotal.toFixed(2);

  console.log(event);
}

submitEl.addEventListener("click", addTip);
