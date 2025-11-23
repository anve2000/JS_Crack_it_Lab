const user = {name: 'Anvesha'};

function greet(message, punctuation){
    console.log(`${message}, ${this.name}${punctuation}`)
}

greet.call(user, 'Hello ','!');


greet.apply(user, ['Hello ', '!']);

const greetAnvesha  = greet.bind(user);

greetAnvesha('Yo',' ?');