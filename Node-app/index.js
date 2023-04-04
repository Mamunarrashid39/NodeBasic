const http = require ("http");
const fs =  require ("fs");

const PORT = 3000;

const handleReadFile= (fileName, statusCode, req, res)=>{
    fs.readFile(fileName, "utf-8", (err,data)=>{
        if(err){
            console.log(err)
        }else {
            res.writeHead(statusCode,{'content-type': "text/html"})
            
            res.write(data);
        }
    });
}
const server = http.createServer((req,res)=>{
    
if(req.url === "/"){
    handleReadFile("index.html",200, req,res);
}
else if(req.url === "/about"){
        handleReadFile("about.html",200, req,res);
    }
    else if(req.url === "/contact"){
        handleReadFile("contact.html",200, req,res);
    }
    else {
        handleReadFile("error.html",200, req,res);
    }
    
    });

server.listen(PORT,()=>{
    console.log (`server is Running`);
});