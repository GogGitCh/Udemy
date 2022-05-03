// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

// #2) Run the above promise and make it console.log "success"
promise.then((resolved) => {
  console.log(`${resolved} bate`);
});

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

// Promise.resolve("Success").then(
//   (resolved) => {
//     setTimeout(() => {
//       console.log(`${resolved} shorthanded`);
//     }, 2000);
//   },
//   (rejected) => {
//     setTimeout(() => {
//       console.log(`${rejected} shorthanded - rejected`);
//     });
//   }
// );

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject("failed").then(
  (resolved) => {
    console.log(resolved);
  },
  (error) => {
    console.log(error);
  }
);

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "http://swapi.dev/api/people/1",
  "http://swapi.dev/api/people/2",
  "http://swapi.dev/api/people/3",
  "http://swapi.dev/api/people/",
];

Promise.all(urls.map((url) => fetch(url).then((responce) => responce.json())))
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    console.log(results[3]);
  })
  .catch(() => {
    console.log("Some URL does not work", err);
  });

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

