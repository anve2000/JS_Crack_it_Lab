const promise = new Promise((resolve, reject)=>{
    // fetch api;
    const value = 'some resolved value'
    if(true){
        resolve(value);
    }else{
        reject('Error happened')
    }
})

promise.then((val)=>{

}).catch((err)=>{

})