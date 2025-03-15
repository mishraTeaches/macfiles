// STORAGE.
let sheetDB = [];
for (let i = 0; i < rows; i++) {
  let sheetRow = [];
  for (let j = 0; j < cols; j++) {
    let cellProp = {
      bold: false,
      italic: false,
      underline: false,
      alignment: "left",
      fontFamily: "monospace",
      fontSize: "14",
      value: "",
      formula: "",
      fontColor: "#000000",
      BGcolor: "#000000", // just for indication purpose
    };
    sheetRow.push(cellProp);
  }
  sheetDB.push(sheetRow);
  // [[{}],[{}]]
}

let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
const underline = document.querySelector(".underline");
const fontSize = document.querySelector(".font-size-prop");
const fontFamily = document.querySelector(".font-family-prop");
const fontColor = document.querySelector(".font-color-prop");
const BGColor = document.querySelector(".BGcolor-prop");
const alignment = document.querySelectorAll(".alignment");
const leftAlign = alignment[0];
const centerAlign = alignment[1];
const rightAlign = alignment[2];
const activeColor = "#d1d8e0";

// Application of 2way binding.

bold.addEventListener("click", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = getCellAndCellProp(address);
  cellProp.bold = !cellProp.bold;
  cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
  bold.style.backgroundColor = cellProp.bold ? activeColor : "";
});

italic.addEventListener("click", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = getCellAndCellProp(address);
  cellProp.italic = !cellProp.italic;
  cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
  italic.style.backgroundColor = cellProp.italic ? activeColor : "";
});

underline.addEventListener("click", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = getCellAndCellProp(address);
  cellProp.underline = !cellProp.underline;
  cell.style.textDecoration = cellProp.underline ? "underline" : "";
  underline.style.backgroundColor = cellProp.underline ? activeColor : "";
});

function getCellAndCellProp(address) {
  let [rid, cid] = decodeRIDCIDFromAddress(address);
  // Access cell & storage object.
  let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
  let cellProp = sheetDB[rid][cid];
  return [cell, cellProp];
}
function decodeRIDCIDFromAddress(address) {
  // address -> "A1"
  let rid = Number(address.slice(1) - 1); //1
  let cid = Number(address.charCodeAt(0)) - 65;
  return [rid, cid];
}
