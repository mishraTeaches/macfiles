// Array.filter(res=>{})

// function myFilter(arr, fn, output = []) {
//   arr.forEach((element) => {
//     if (fn(element)) {
//       output.push(element);
//     }
//   });
//   return output;
// }

const isEven = (num) => {
  return num % 2;
};

const arr = [1, 2, 3, 4, 5, 6, 6, 6, 9];
// const onlyEvenElements = myFilter(arr, isEven);

let output = arr.filter((res) => isEven(res));
console.log(output);
