const http =require ('http');
const port =3000;
const hostName ='127.0.0.1'

const myServer =http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    res.end("<h1> Hello </h1>");
    res.end ();
});

myServer.listen(port, hostName, ()=>{
    console.log (`Server is Runing Successfully at http://${hostName}:${port}`);
});