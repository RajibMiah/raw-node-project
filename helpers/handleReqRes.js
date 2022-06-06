/* eslint-disable prettier/prettier */

/*
    title : Handeling request response
    Description: Handeling request response
    author: Rajib Miah
    Date: 6/7/2022
*/

// dependancies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routes-handlers/notFoundHandler');

// module scraffholding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handler

    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    const method = req.method.toLowerCase();
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
        // eslint-disable-next-line no-param-reassign
        statusCode = typeof (statusCode) === 'number' ? statusCode : 500;
        // eslint-disable-next-line no-param-reassign
        payload = typeof (payload) === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // RETURN THE FINAL RESPONSE

        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        res.end('hello world');
    });
};

module.exports = handler;
