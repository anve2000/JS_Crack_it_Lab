function Counter(value){
    let count = value;
    return {
        increment(){
            count++;
        },
        getCount(){
            return count;
        }
    }
}

const counter1 = Counter(2);


const counter2 = Counter(5);

console.log(counter1.getCount());
counter1.increment();
counter1.increment();

console.log(counter1.getCount());