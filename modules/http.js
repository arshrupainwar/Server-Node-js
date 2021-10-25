const http = require("http");

//create server object                              //create server accepts a call back function
                                                    // here request and response will be send by node js
let sever = http.createServer((req,res) =>{
    //console.log(res);     will return an object of response
    //console.log(req);     will return an object of request 
    res.write("<h1>Hello World!!</h1>");
    res.end();

});

sever.listen(5000,()=> {console.log("server is running on port 5000")})


//method chaining(another way of writting upper code)
// http.createServer((req,res) =>{
//     res.write("<h1>Hello World!!</h1>");
//     res.end();

// }).listen(5000,()=> {console.log("server is running on port 5000")})

