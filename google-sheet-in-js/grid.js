let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");
for (let i = 0; i < rows; i++) {
  const addressCol = document.createElement("div");
  addressCol.setAttribute("class", "address-col");
  addressCol.innerText = i + 1;
  addressColCont.appendChild(addressCol);
}

for (let i = 0; i < cols; i++) {
  const addressRow = document.createElement("div");
  addressRow.setAttribute("class", "address-row");
  addressRow.innerText = String.fromCharCode(65 + i);
  addressRowCont.appendChild(addressRow);
}

for (let i = 0; i < rows; i++) {
  let rowcont = document.createElement("div");
  rowcont.setAttribute("class", "row-cont");
  for (let j = 0; j < cols; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contenteditable", "true");
    cell.setAttribute("spellcheck", false);
    // attributes for cell and storage identification
    cell.setAttribute("rid", i);
    cell.setAttribute("cid", j);
    rowcont.appendChild(cell);
    addlistenerForAddressBarDisplay(cell, i, j);
  }
  cellsCont.appendChild(rowcont);
}

function addlistenerForAddressBarDisplay(cell, i, j) {
  cell.addEventListener("click", (e) => {
    const rowValue = i + 1;
    const colValue = String.fromCharCode(65 + j);
    addressBar.value = `${colValue}${rowValue}`;
  });
}

// DEFAULT SELECTION IN FIRST CELL ON FIRST LOAD.
const firstCell = document.querySelector(".cell");
firstCell.click();
