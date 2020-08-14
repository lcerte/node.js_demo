const http = require('http');
const fs = require('fs');
const ejs = require('ejs');//import ejs support resources

var template = fs.readFileSync(__dirname + '\\..\\myserver5_ejs\\hello.ejs', 'utf-8');
const server = http.createServer((req, res) => {
    var data = ejs.render(template, {
        title: 'hello ejs',
        content: '<strong>big hello ejs.</strong>'
    });
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(data);
});


const config =require('../config').config;

server.listen(config.port, config.hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});

// D:\workspace\node.js_demo\server_demo\myserver5_ejs\server.js