let a = [1, 2, 3, 4, 5];
// let output = [2,4,6,8,10];

// let out = a.map(fn)

Array.prototype.myMap = function (fn) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      output.push(fn(this[i]));
    }
  }
  return output;
};

const donh = (e) => {
  return e * 2;
};
let res = a.myMap(donh);
console.log(res);
