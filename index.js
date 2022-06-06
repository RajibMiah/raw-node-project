/* eslint-disable prettier/prettier */
/*
    title : uptime monitoring application
    Description: A RESTFUL API to monitor up or down time of user defined links
    author: Rajib Miah
    Date: 6/7/2022
*/

// depandancies

const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

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

app.handleReqRes = handleReqRes;

// start the server
app.createServer();
