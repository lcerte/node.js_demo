const http = require('http');

const hostname = '192.168.5.185';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end("Hello,this is my first server demo");
});

server.listen(port, hostname, ()=> {
    console.log('Server running at http://${hostname}:${port}/');
});
//通过浏览器http://192.168.5.185:3000/ 访问