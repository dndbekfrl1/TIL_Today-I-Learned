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
 * payment method 값 가져오기
 * css 수정
 */
const payment_method = document.getElementById("payment_method").value;
const calculate = document.getElementById("calculate");
const monthly_payment_res = document.getElementById("monthly_pament");
const total_payment_res = document.getElementById("total_payment");
const total_interest_res = document.getElementById("total_interest");

calculate.addEventListener("click", () => {
  console.log(payment_method);
  amount = Number(document.getElementById("amount").value);
  year = Number(document.getElementById("year").value);
  loan_interest_year = Number(document.getElementById("rate").value) * 0.01;
  month = year * 12;
  loan_interest = loan_interest_year / 12;

  levelPayment();
});

//원리금균등
function levelPayment() {
  let denominator = Math.pow(1 + loan_interest, month) - 1;
  let numerator = amount * loan_interest * Math.pow(1 + loan_interest, month);

  monthly_payment = Math.ceil(numerator / denominator);
  total_repayment = monthly_payment * month;
  console.log(total_repayment);
  for (let i = 0; i < month; i++) {
    let detail = {}; //월상환금 디테일 정보
    let balances = 0;
    if (i == 0) {
      balances = amount;
    } else {
      balances = monthly_payment_detail[i - 1].balances;
    }
    let loan = Math.ceil(balances * loan_interest);
    detail["principle_payment"] = monthly_payment - loan;
    detail["loan"] = loan;
    detail["balances"] = Math.ceil(balances - monthly_payment); //대출잔금
    monthly_payment_detail.push(detail);
  }

  console.log(monthly_payment_detail.length);
}

//원금균등
function principalEquality() {
  monthly_payment = amount / month;
  for (let i = 0; i < month; i++) {
    let balances = 0;
    if (i == 0) {
      balances = amount;
    } else {
      balances = monthly_payment_detail[i - 1].balances;
    }
    let loan = balances * loan_interest;
    detail["principle_payment"] = monthly_payment;
    detail["loan"] = loan;
    detail["balances"] = balances - monthly_payment;
  }
}

//만기일시
function expirationDate() {
  loan_interest = ((amount * loan_interest_year) / 12) * month;
  total_repayment = loan_interest + amount;
}
