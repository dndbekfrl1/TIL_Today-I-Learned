let pay_method = 0;
let amount = 0;
let year = 0;
let month = 0;
let loan_interest_year = 0;
let loan_interest = 0;
let total_repayment = 0; //총상환금
let monthly_payment = 0; //월상환금
let monthly_payment_detail = []; //월상환금 디테일 정보 리스트

/**
 * TODO
 * css 수정
 */
let payment_method = document.getElementById("payment_method");
const calculate = document.getElementById("calculate");
const monthly_payment_res = document.getElementById("monthly_pament");
const total_payment_res = document.getElementById("total_payment");
const results_container =
  document.getElementsByClassName("results_container")[0];
const detail_container = document.getElementById("detail");

function update() {
  pay_method = payment_method.options[payment_method.selectedIndex].value;
}
update();

function initVariable() {
  amount = 0;
  year = 0;
  month = 0;
  loan_interest_year = 0;
  loan_interest = 0;
  total_repayment = 0;
  monthly_payment = 0;
  monthly_payment_detail = [];
  monthly_payment_res.innerText = 0;
  total_payment_res.innerText = 0;
  detail_container.innerHTML = "no data";
}

calculate.addEventListener("click", () => {
  initVariable();
  amount = Number(document.getElementById("amount").value);
  year = Number(document.getElementById("year").value);
  loan_interest_year = Number(document.getElementById("rate").value) * 0.01;

  if (amount == 0 || year == 0 || loan_interest_year == 0) {
    alert("Please enter value");
    return;
  }

  month = year * 12;
  loan_interest = loan_interest_year / 12;

  if (pay_method == 0) {
    levelPayment();
  } else if (pay_method == 1) {
    principalEquality();
  } else {
    expirationDate();
  }

  if (pay_method == 2) {
    results_container.style.visibility = "visible";
    detail_container.style.visibility = "hidden";
    total_payment_res.innerHTML = total_repayment + "$";
  } else {
    results_container.style.visibility = "visible";
    detail_container.style.visibility = "visible";
    monthly_payment_res.innerHTML = monthly_payment + "$";
    total_payment_res.innerHTML = total_repayment + "$";
    createDetailElement(monthly_payment_detail);
  }
});

//원리금균등
function levelPayment() {
  let denominator = Math.pow(1 + loan_interest, month) - 1;
  let numerator = amount * loan_interest * Math.pow(1 + loan_interest, month);

  monthly_payment = Math.ceil(numerator / denominator);
  total_repayment = monthly_payment * month;
  for (let i = 0; i < month; i++) {
    let detail = {}; //월상환금 디테일 정보
    let balances = 0;
    if (i == 0) {
      balances = amount;
    } else {
      balances = monthly_payment_detail[i - 1].balances;
    }
    let loan = Math.ceil(balances * loan_interest);
    detail["principle_payment"] = Math.ceil(monthly_payment - loan);
    detail["loan"] = Math.ceil(loan);
    detail["balances"] = Math.ceil(balances - monthly_payment); //대출잔금
    monthly_payment_detail.push(detail);
  }
}

//원금균등
function principalEquality() {
  monthly_payment = Math.ceil(amount / month);
  total_repayment = monthly_payment * month;
  for (let i = 0; i < month; i++) {
    let detail = {};
    let balances = 0;
    if (i == 0) {
      balances = amount;
    } else {
      balances = Math.ceil(monthly_payment_detail[i - 1].balances);
    }
    let loan = balances * loan_interest;
    detail["principle_payment"] = Math.ceil(monthly_payment);
    detail["loan"] = Math.ceil(loan);
    detail["balances"] = Math.ceil(balances - monthly_payment);
    monthly_payment_detail.push(detail);
  }
}

//만기일시
function expirationDate() {
  loan_interest = ((amount * loan_interest_year) / 12) * month;
  total_repayment = Math.ceil(loan_interest + amount);
}

function createDetailElement(detail) {
  if (detail.length == 0) return;
  let detaildescribe = "";
  for (let i = 0; i < detail.length; i++) {
    let principle_payment = detail[i].principle_payment + "$";
    let loan = detail[i].loan + "$";
    let balances = detail[i].balances + "$";
    let detaildiv = `
    <tr>
      <td>${i}</td>
      <td>${loan}</td>
      <td>${principle_payment}</td>
      <td>${balances}</td>
    </tr`;
    detaildescribe += detaildiv;
  }
  let table = `
  <table>
    <th>Round</th>
    <th>Loan</th>
    <th>Principle Payment</th>
    <th>Balances</th>
    ${detaildescribe}
  </table>`;
  detail_container.innerHTML = table;
}
