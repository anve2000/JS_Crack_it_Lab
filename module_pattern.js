const counter = (function(){
    let count = 0;
    return ({
        inc:(()=>count++),
        dec:(()=>count--)
    })
})();

counter.dec();
counter.dec();
console.log(counter.inc());
console.log(counter.dec());