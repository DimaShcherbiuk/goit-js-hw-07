function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const getInput = document.querySelector("input");

createBtn.addEventListener("click", () => {
  getInput.focus();
  if (getInput.value > 0 && getInput.value < 101) {
    createBoxes(getInput.value);
    getInput.value = "";
  } else {
    alert("Amount is not correct");
  }
});

function createBoxes(amount) {
  boxes.innerHTML = "";
  let boxinSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const boxColor = getRandomHexColor();
    let divNew = `<div style="width: ${boxinSize}px; height: ${boxinSize}px; background-color: ${boxColor}"></div>`;
    boxes.insertAdjacentHTML("beforeend", divNew);
    boxinSize += 10;
  }
}

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
function destroyBoxes() {
  boxes.innerHTML = "";
}
