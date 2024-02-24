function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", () => {
  const changeFoo = getRandomHexColor();
  const bodyColor = document.querySelector("body");
  bodyColor.style = `background-color: ${changeFoo}`;
  const spanColor = document.querySelector(".color");
  spanColor.textContent = changeFoo;
});
