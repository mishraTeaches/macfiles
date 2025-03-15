function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    return name;
  }
  return displayName;
}

const myFunc = makeFunc();
console.log(myFunc());
