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
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // response handler
    res.end('hello world');
};

// start the server

app.createServer();
