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
    res.end("welcome to server");
    
if(req.url === "/"){
    fs.readFile("index.html", "utf-8", (err,data)=>{
        if(err){
            console.log(err)
        }else {
            res.writeHead(200,{'content-type': "text/html"})
            
            res.write(data);
        }
    });
}

});
server.listen(PORT,()=>{
    console.log (`server is Running`);
});