var p1 = new Promise(function (resolve, reject) {
  resolve("one");
});

var p2 = new Promise(function (resolve, reject) {
  reject("two was rejected");
}).catch((err) => err);

var p3 = new Promise(function (resolve, reject) {
  resolve("three");
});

Promise.all([p1, p2, p3])
  .then(function (res) {
    console.log("Promise.all", res);
  })
  .catch(function (err) {
    console.error("Promise.all error", err);
  });
