function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtnChange = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

colorBtnChange.addEventListener("click", changeColor);

function changeColor() {
	let color = getRandomHexColor();
	document.body.style.backgroundColor = color;
	spanColor.textContent = color;
}