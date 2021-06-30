const button = document.getElementById("button");
const body = document.body;
body.style.background = changeColor();

button.addEventListener("click", () => {
  let color = changeColor();
  body.style.background = color;
});

function changeColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + color;
}
