const http =require ('http');
const fs  =require ('fs');
const port =3000;
const hostName ='127.0.0.1'

const myServer =http.createServer((req,res)=>{

  const handleReadFile =(statusCode, filelocation)=>{

    fs.readFile(filelocation,(srr,data)=>{
        res.writeHead(statusCode,{"conten-type":"text/html"})
        res.write(data);
        res.end();
  
    });
  }
   if(req.url === '/'){
    handleReadFile(200, "./viwes/index.html");

    fs.readFile("./viwes/index.html",(srr,data)=>{
        res.writeHead(200,{"conten-type":"text/html"})
        res.write(data);
        res.end();
    })
   }else if(req.url==="/about"){
    handleReadFile(200, "./viwes/about.html");
    
   }else if(req.url==="/contact"){
    handleReadFile(200, "./viwes/contact.html");
   
   }else {
    handleReadFile(200, "./viwes/error.html");
   }
});

myServer.listen(port, hostName, ()=>{
    console.log (`Server is Runing Successfully at http://${hostName}:${port}`);
});