const gridContainer = document.querySelector(".content");
createGrid(16, 16);

function createGrid(width, height) {
    for(let i=0; i<height; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        fillGridRow(gridRow, width);
        gridContainer.append(gridRow);
    }
}

function fillGridRow(gridRow, width) {
    for(let i=0; i<width; i++) {
        let gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        gridRow.append(gridBox);
    }
}