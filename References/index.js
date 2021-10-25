//console.log("file loded");
//console.log(this);

// the execution context of JS is different on different platform(eg node and browser )
// here in node the execution context is a blank object.
// but in browser the execution context is the whole window. 


const Person = require('./person')     // class from person file will gey imported ojn this index file 
console.log(Person);
const test = require('./test');         // a function can also be imported in JS and if function will come then the variable of function will also come
const john = new Person("john",20) 
john.greetings();
//console.log(test);