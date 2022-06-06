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

module.exports = handler;
