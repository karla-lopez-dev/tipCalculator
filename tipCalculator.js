let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let total = document.getElementById("total");
let button = document.querySelector("button");

function calculateTotal() {
  let billValue = bill.value;
  let tipValue = tip.value;
  let operator = billValue * (1 + tipValue / 100);
  total.innerText = operator.toFixed(2);
}

button.addEventListener("click", calculateTotal);
