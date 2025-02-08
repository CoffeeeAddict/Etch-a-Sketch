const gridContainer = document.querySelector(".content");
const gridChangerButton = document.querySelector(".changeGridSizeButton");
const widthInput = document.querySelector(".widthInput");
const heightInput = document.querySelector(".heightInput");
const currentGridSize = document.querySelector(".currentGridSize");
createGrid(16, 16);

gridChangerButton.addEventListener("click", changeGridSize);

function changeGridSize() {
    let width = Number(widthInput.value);
    let height = Number(heightInput.value);
    if(isNaN(width) || isNaN(height)) {
        throw new Error("Width or height not number");
    }
    createGrid(width, height);
}

function clearGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function createGrid(width, height) {
    clearGrid();
    for(let i=0; i<height; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        fillGridRow(gridRow, width);
        gridContainer.append(gridRow);
    }
    currentGridSize.textContent = width + " x " + height;
}

function fillGridRow(gridRow, width) {
    for(let i=0; i<width; i++) {
        let gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        gridBox.addEventListener("mouseover", fillBox);
        gridRow.append(gridBox);
    }
}

function fillBox(event) {
    let box = event.target;
    box.classList.add("boxFilled");
}