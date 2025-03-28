let availableKeywords = [
  "Html",
  "CSS",
  "Easy Tutorials",
  "Web design tutorials",
  "Javascript",
  "Where to learn coding online",
  "Where to learn web design",
  "How to create a website",
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    display(result);
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li>" + list + "</li>";
  });
  resultsBox.innerHTML =
    "<ul>" + content.toString().replaceAll(",", "") + "</ul>";
}
