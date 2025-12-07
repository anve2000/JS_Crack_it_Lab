const init = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 0);
  throw new Error('Sync error in executor');
});

init
  .then(e => {
    console.log('Then 1:', e);
    return Promise.reject('Rejected in then');
  })
  .catch(e => {
    console.log('Catch 1:');
  })
  .then(e => {
    console.log('Then 2:', e);
    return e.toUpperCase();  
  })
  .catch(e => {
    console.log('Catch 2:');
    throw 'Thrown in catch 2';
  })
  .then(
    res => console.log('Then 3 (fulfilled):', res),
    rej => console.log('Then 3 (rejected handler):', rej)
  )
  .catch(e => {
    console.log('Final catch:', e);
  }).then((e)=>console.log('Last ', e));