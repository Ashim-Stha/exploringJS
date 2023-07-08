//Promises
// 3states: pending,fulfilled,rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes the promise is fulfilled or resolved");
  } else {
    reject("No,Promise is rejected");
  }
});

console.log(myPromise);

//to show pending state

const nextPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Next promise is resolved");
  }, 3000);
});

nextPromise.then((value) => {
  console.log(value);
});
//you go ahead i will catchup
//so code execution is moved forward and when the nextPromise is fulfilled it executes

myPromise
  .then((value) => {
    console.log(value);
    return value + " this value is passed to newValue as parameter";
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });
