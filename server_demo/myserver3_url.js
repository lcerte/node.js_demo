//服务器根据用户请求的url地址不同 做出不同反应

const http = require('http');

const config = require('./config').config

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    switch (req.url) {
        case '/':
            res.end('helo world.');
            break;
        case '/about':
            res.end('This is about page.');
            break;
        case '/home':
            res.end('Welcome to my homepage!');
            break;
        default://if the customer use a unexist url
            res.end('NotFound!');
    }
});

server.listen(config.port, config.hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});