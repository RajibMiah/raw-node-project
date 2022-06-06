/* eslint-disable prettier/prettier */
/*
    title : Sample handler
    Description : Sample handler
    author: Rajib Miah
    Date: 6/7/2022
*/

// module scraffholding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        msg: 'this is a sample url',
    });
};

module.exports = handler;
