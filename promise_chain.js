const init = new Promise((resolve, reject) => {
  (() =>{
    resolve('Hello');
  })();
});

init
  .then((e) => {
    throw e;
  })
  .catch((e) => {
    console.log("Error 1");
  })
  .then((e) => {
    console.log("Works ",e);
  })
  .catch((e) => {
    console.log("Error 2", e);
  });
