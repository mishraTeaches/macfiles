// const parent = {
//   value: 2,
//   method() {
//     return this.value + 1;
//   },
// };
// const child = {
//   __proto__: parent,
// };
// child.value = 4;
// console.log(child.method());

// const boxPrototype = {
//   getValue() {
//     return this.value;
//   },
// };

// const boxes = [
//   {
//     value: 1,
//     __proto__: boxPrototype,
//   },
//   {
//     value: 2,
//     __proto__: boxPrototype,
//   },
//   {
//     value: 3,
//     __proto__: boxPrototype,
//   },
// ];

// console.log(boxes[1].getValue());

function Name(value) {
  this.value = value;
}
Name.prototype.getName = function () {
  return this.value;
};

console.log(new Name(2).getName());
