const _ = require('lodash');
const config = require('./config');
const getPriceFeed = require('./util/getPriceFeed.util');
const storePriceFeed = require('./db/priceFeed.db'); 

setInterval(async function() {
    const priceFeed = await getPriceFeed.many(config.services.spy.companyList);

    if(priceFeed != undefined) {
        if(priceFeed.length != 0) {
            const arrPriceFeed = getPriceFeed.arrange(priceFeed);
            storePriceFeed.createMany(getPriceFeed.values(arrPriceFeed), (err, data) => {
                if(err) {
                    console.log('Error', error.message);
                    return;
                }
            });
        }
    }
}, config.services.spy.timeout);