//在myserver1的基础上 通过文件引入来设置ip地址和端口号

const http = require('http');
const config = require('./config').config;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end("Hello world");
});

server.listen(config.port, config.hostname, ()=> {
    console.log('Server running at http://${hostname}:${port}/');
});

//http://192.168.5.185:8000/