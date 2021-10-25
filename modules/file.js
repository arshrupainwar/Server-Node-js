const fs = require("fs");
const path = require("path");

//create folder dynamically
// fs.mkdir(path.join(__dirname,"/test1"),function(error){
//     if(error) throw error
//     console.log("folder created"); 
// });

//create and write file
// fs.writeFile(path.join(__dirname,"/test1","hello.txt"),"Hello World!!!",function(error){
//     if(error) throw error
//     console.log("Folder Created!!");
// });

//read file
// fs.readFile(path.join(__dirname,"/test1","hello.txt"),"utf8",function(error,data){
//     if(error) throw error
//     console.log(data);
// });

//rename file
// fs.rename(path.join(__dirname,"/test1","hello.txt"),path.join(__dirname,"/test1","test2.txt"),function(error){
//     if(error) throw error
//     console.log("File Renamed!!!");
// });

//append file
// fs.appendFile(path.join(__dirname,"/test1","hello.txt"),"node is awsome",function(error){
//     if(error) throw error
//     console.log("File Appended");
// });