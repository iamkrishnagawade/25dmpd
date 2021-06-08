const _ = require('lodash');
const config = require('./config');
const getPriceFeed = require('./util/getPriceFeed.util');
const storePriceFeed = require('./db/priceFeed.db');
let pastPriceFeed = [];

setInterval(async function() {
    const priceFeed = await getPriceFeed.many(config.services.spy.companyList);

    if(priceFeed != undefined) {
        if(priceFeed.length !== 0) {
            const arrPriceFeed = getPriceFeed.arrange(priceFeed);
            if(pastPriceFeed.length !== 0) {
                const filterPriceFeed = getPriceFeed.filterPriceFeed(pastPriceFeed, arrPriceFeed);
                if(filterPriceFeed.length !== 0) {
                    // store price feeds into database
                    storePriceFeed.createMany(getPriceFeed.values(filterPriceFeed), (err, data) => {
                        if(err) {
                            console.log('Error', error.message);
                            return;
                        }
                    });
                }
            }

            pastPriceFeed = arrPriceFeed;
        }
    }
}, config.services.spy.timeout);