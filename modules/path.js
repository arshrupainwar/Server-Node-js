const path = require('path');
//console.log(path);

//name of current file 
//console.log(__filename);

//for current directory name
//console.log(path.dirname(__filename));

//for extension of file
// console.log(path.extname(__filename));

//create path
//console.log(path.parse(__filename));    // will return an object 

//concatinate path
console.log(path.join(__dirname,'test','hello.html'))   // way to create dynamic path (only path will get created not the file)

