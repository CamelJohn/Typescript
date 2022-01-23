// TODO: strictness examples

// TODO: Downleveling Example
const age = 35;
const fullName = 'Jonathan Atia';

const greet = `${fullName} is ${age} years old.`;

// TODO: Emitting

// ! with errors
function greeting(name: string, date: any) {
    console.log(`Hello ${name}, today is ${date}!`);
}

greeting('Infidel');