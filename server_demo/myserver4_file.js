//fs文件读写模块的引用,读取文件并返回给用户里面的内容
//respond the content of index.html from a file

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/index.html', 'utf-8', function (err, data) { //use the path of index.html
        if (err) { // if there is any erro occur when read the file
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not Founded.');
        } else { // if the reading is finished
            res.setHeader('Content-Type', 'text/html'); // because the content of file is html, so here is html type
            res.statusCode = 200;
            res.end(data);
        }
    });
});

const config = require('./config').config;
server.listen(config.port, config.hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});