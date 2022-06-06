/* eslint-disable prettier/prettier */
/*
    title : uptime monitoring application
    Description: A RESTFUL API to monitor up or down time of user defined links
    author: Rajib Miah
    Date: 6/7/2022
*/

// depandancies

const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object  - module scaffolding
const app = {};

// app configuration
app.config = {
    port: 3000,
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

app.handleReqRes = (req, res) => {
    // request handler

    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    // const method = req.method.toLowerString();

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        res.end('hello world');
    });
    // response handler
};

// start the server

app.createServer();
