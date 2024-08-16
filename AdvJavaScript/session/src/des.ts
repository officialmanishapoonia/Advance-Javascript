
const wizard:Array<String> = ['Harry', 'Potter']

// console.log(wizard[0], wizard[1])  // Harry Potter

const [firstName, lastName] = wizard

console.log(firstName, lastName)    // Harry Potter

// destructuring objects

const person:{id:Number,namee:String,age:Number} = { id: 1, namee: 'John Doe', age: 21 }

// console.log(person.name);

const { namee }:typeof person= person

console.log(namee)   // John Doe