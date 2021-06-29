const rs = document.getElementById("result");
let result = 0;
let op1 = 0;
let op2 = 0;
let operator = "";
let num = "";

document.querySelectorAll(".num").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (op2 != 0) {
      console.log("dd");
      rs.innerHTML = "";
      num = 0;
      op1 = 0;
      op2 = 0;
      operator = "";
    }

    num += btn.innerHTML;
    rs.innerHTML = num;

    if (operator == "") {
      op1 = Number(num);
    } else {
      op2 = Number(num);
    }
  });
});

document.querySelectorAll(".operator").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (op2 != 0) {
      op1 = Number(rs.innerHTML);
      op2 = 0;
    }
    operator = btn.innerHTML;
    num = "";
  });
});

document.getElementById("return").addEventListener("click", () => {
  if (operator == "+") {
    result = op1 + op2;
  } else if (operator == "-") {
    result = op1 - op2;
  } else if (operator == "*") {
    result = op1 * op2;
  } else if (operator == "/") {
    result = op1 / op2;
  }
  rs.innerHTML = result;
  console.log("resut", result, op1, op2, operator);
});

document.getElementById("erase").addEventListener("click", () => {
  op1 = 0;
  op2 = 0;
  num = "";
  rs.innerHTML = "0";
});
