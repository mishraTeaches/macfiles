const addCountry = document.querySelector("#addItemButton");
const inputValue = document.querySelector("#countryInput");
const unOrderedList = document.querySelector("#list");
const arr = [];
function dynamicList(element) {
  const list = document.createElement("li");
  list.textContent = element;
  list.setAttribute("class", "list_elem");
  list.style.listStyle = "none";
  unOrderedList.appendChild(list);
  document.body.appendChild(unOrderedList);
}

function submit(value) {
  if (!value) {
    return;
  }
  if (arr.includes(value)) {
    return;
  }
  arr.push(value);
  dynamicList(value);
}

addCountry.addEventListener("click", () => {
  submit(inputValue.value);
});
