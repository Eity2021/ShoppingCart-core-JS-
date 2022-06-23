//phone case function

function updateNumber(product, price, isIncrease) {
  const Case = document.getElementById(product + "_number");
  let productInput = Case.value;
  //console.log(productInput)

  if (isIncrease == true) {
    productInput = parseInt(productInput) + 1;
  } else if (productInput > 0) {
    productInput = parseInt(productInput) - 1;
  }

  Case.value = productInput;
  //update case total amount

  const total = document.getElementById(product + "_amount");
  total.innerText = productInput * price;

  //subtotal
  totalCalculate();
}

//calculation function

function getCalculate(product) {
  const phoneInput = document.getElementById(product + "_number");
  const phoneNumber = parseInt(phoneInput.value);
  return phoneNumber;
}

function totalCalculate() {
  const phoneTotal = getCalculate("phone") * 1219;
  const caseTotal = getCalculate("case") * 59;
  const subtotal = phoneTotal + caseTotal;
  const tax = subtotal / 10;
  const totalAmount =  subtotal + tax;
  console.log(subtotal);
  //update
  const subAmount = document.getElementById("sub_total");
  subAmount.innerText = subtotal;

  const taxAmount = document.getElementById("tax_amount");
  taxAmount.innerText = tax;
  const mainAmount = document.getElementById("total_price");
  mainAmount.innerText = totalAmount;
}

//case
document.getElementById("plus_btn").addEventListener("click", function () {
  updateNumber("case", 59, true);
});

document.getElementById("minus_btn").addEventListener("click", function () {
  updateNumber("case", 59, false);
});

//phone
document.getElementById("phone_plus").addEventListener("click", function () {
  updateNumber("phone", 1219, true);
});

document.getElementById("phone_minus").addEventListener("click", function () {
  updateNumber("phone", 1219, false);
});
