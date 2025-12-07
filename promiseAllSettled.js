const promises = [
  fetch('https://jsonplaceholder.typicode.com/posts/1'),
  fetch('https://httpbin.org/delay/2'),
  fetch('https://randomuser.me/api/')
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach(res => {
      console.log(res.status); // "fulfilled" or "rejected"
      
      if (res.status === 'fulfilled') {
        console.log('Data:', res.value);
      } else {
        console.log('Error:', res.reason);
      }
    });
  });