/* eslint-disable prettier/prettier */
/*
    title : Not found handler
    Description : Not found handler
    author: Rajib Miah
    Date: 6/7/2022
*/

// module scraffholding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log('Not found');

    callback(404, {
        msg: 'Your requested url was not found',
    });
};

module.exports = handler;
