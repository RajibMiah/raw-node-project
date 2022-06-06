/* eslint-disable prettier/prettier */
/*
    title : Routes
    Description: Application Routes
    author: Rajib Miah
    Date: 6/7/2022
*/
const { sampleHandler } = require('./handlers/routes-handlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
