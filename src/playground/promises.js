const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is my resolve data");
    // reject("Something went wrong!")
  }, 5000);
});

console.log("before");

promise.then((data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is my other promise");
    }, 5000);
  });
}).then((str) => {
  console.log("Does this run? ", str)
}).catch((error) => {
  console.log('error: ', error)
})

console.log("after");

