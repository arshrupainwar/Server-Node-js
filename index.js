const http = require("http");
const fs = require("fs");
const path = require("path");


const server = http.createServer((req,res) =>{
    // if(req.url === "/")
    // {
    //     fs.readFile(path.join(__dirname,"public","index.html"),(error,content) =>{
    //         res.writeHead(200,{"Content-Type":"text/html"})
    //         res.end(content);
    //     });
    // }

    // else if(req.url ==="/about")
    // {
    //     fs.readFile(path.join(__dirname,"public","about.html"),(error,data) =>{
    //         res.writeHead(203,{"Content-Type":"text/html"})
    //         res.end(data);
    //     })
    // }

    // else if(req.url ==="/contact")
    // {
    //     fs.readFile(path.join(__dirname,"public","contact.html"),(error,data) =>{
    //         res.writeHead(203,{"Content-Type":"text/html"})
    //         res.end(data);
    //     })
    // }



    // same code with switch statement and how to open external files
 
    //Build File Path
    
    
    let filePath = path.join(__dirname,'public',req.url === '/' ? 'index.html':req.url);

    //Extension of File
    let extname = path.extname(filePath);

    //Initial Content type
    let contentType = 'text/html';

    //Check ext and set content Type
    switch(extname)
    {
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.png':
        contentType = 'text/png';
        break;
    case '.jpg':
        contentType = 'text/jpeg';
        break;
    case '.json':
        contentType = 'application/json';
        break;        
    }

    //Read File
    fs.readFile(filePath,(err,content) =>
    {  
        if(err)
        {
            if(err.code == 'ENOENT')
            {
                //Page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content) =>
                {
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(content);
                })
            }
        
            else
            {
                res.writeHead(500);
                res.end(`Server Error :${err.code}`)
            }
        }
        
        else
        {
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content)
        }
    });
});


const port = process.env.port || 3000               
server.listen(port,()=>console.log(`Server is runniung in port ${port}`));   


//process ell about all the process running in computer
//env - environment 

//server will not allow the external files (external css and javascript)
//so to handel these error we need to do see the switch