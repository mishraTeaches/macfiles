for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
    cell.addEventListener("blur", (e) => {
      let address = addressBar.value;
      let [cellData, cellProp] = getCellAndCellProp(address);
      let enteredData = cellData.innerText;
      if (enteredData === cellProp.value) return;
      cellProp.value = enteredData;
      // IF DATA MODIFIES,remove p-c relation,formula empty,update children.

      removeChildFromParent(cellProp.formula);
      cellProp.formula = "";
      updatedChildrenCells(address);
    });

    cell.addEventListener("click", (e) => {
      let formulaBar = document.querySelector(".formula-bar");
      if (!cell.innerText) {
        formulaBar.value = "";
        return;
      }
    });
  }
}

let formulaBar = document.querySelector(".formula-bar");
formulaBar.addEventListener("keydown", (e) => {
  let inputFormula = formulaBar.value;
  if (e.key === "Enter" && inputFormula) {
    let evaluatedValue = evaluateFormula(inputFormula);
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    // IF FORMULA CHANGES SO BREAK P-C RELATIONSHIP,add new p-c relationship.

    if (inputFormula !== cellProp.formula)
      removeChildFromParent(cellProp.formula);
    setCellUIAndCellProp(evaluatedValue, inputFormula, address);
    addChildToParent(inputFormula);
    updatedChildrenCells(address);
  }
});
function updatedChildrenCells(parentAddress) {
  let [parentCell, parentCellProp] = getCellAndCellProp(parentAddress);
  let children = parentCellProp.children;

  for (let i = 0; i < children.length; i++) {
    let childAddress = children[i];
    let [childCell, childCellProp] = getCellAndCellProp(childAddress);
    let childFormula = childCellProp.formula;
    let evaluatedValue = evaluateFormula(childFormula);
    setCellUIAndCellProp(evaluatedValue, childFormula, childAddress);
    updatedChildrenCells(childAddress);
  }
}

function evaluateFormula(formula) {
  let encodedFormula = formula.split(" ");
  for (let i = 0; i < encodedFormula.length; i++) {
    let asciiValue = encodedFormula[i].charCodeAt(0);
    if (asciiValue >= 65 && asciiValue <= 90) {
      let [cell, cellProp] = getCellAndCellProp(encodedFormula[i]);
      encodedFormula[i] = cellProp.value;
    }
  }
  let decodedFormula = encodedFormula.join(" ");
  return eval(decodedFormula);
}
function addChildToParent(formula) {
  const childAddress = addressBar.value;
  let encodedFormula = formula.split(" ");
  for (let i = 0; i < encodedFormula.length; i++) {
    let asciiValue = encodedFormula[i].charCodeAt(0);
    if (asciiValue >= 65 && asciiValue <= 90) {
      let [parentCell, parentCellProp] = getCellAndCellProp(encodedFormula[i]);
      parentCellProp.children.push(childAddress);
    }
  }
}
function removeChildFromParent(formula) {
  const childAddress = addressBar.value;
  let encodedFormula = formula.split(" ");
  for (let i = 0; i < encodedFormula.length; i++) {
    let asciiValue = encodedFormula[i].charCodeAt(0);
    if (asciiValue >= 65 && asciiValue <= 90) {
      let [parentCell, parentCellProp] = getCellAndCellProp(encodedFormula[i]);
      let idx = parentCellProp.children.indexOf(childAddress);
      parentCellProp.children.slice(idx, 1);
    }
  }
}
function setCellUIAndCellProp(evaluatedValue, formula, address) {
  let [cell, cellProp] = getCellAndCellProp(address);
  cell.innerText = evaluatedValue;
  cellProp.value = evaluatedValue;
  cellProp.formula = formula;
}
