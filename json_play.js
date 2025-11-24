const person = {
    name:'anvesha',
    salary:{
        base:'4233323',
        variable: '1323',
    },
    greet:()=>{
        return `Hello !${this.name}`;
    }
}

console.log(JSON.stringify(person));