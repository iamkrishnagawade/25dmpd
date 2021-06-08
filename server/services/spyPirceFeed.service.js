const config = require('./config');
const commonUtil = require('./util/common.util');
const getPriceFeed = require('./util/getPriceFeed.util');
const storePriceFeed = require('./db/priceFeed.db');
let pastPriceFeed = [];

setInterval(async function() {
    const priceFeed = await getPriceFeed.manyPriceFeed(config.services.spy.companyList);

    if(priceFeed !== undefined) {
        if(priceFeed.length !== 0) {
            const arrPriceFeed = getPriceFeed.arrangePriceFeed(priceFeed);
            
            if(pastPriceFeed.length !== 0) {
                const filterPriceFeed = commonUtil.filterArray(pastPriceFeed, arrPriceFeed);

                if(filterPriceFeed.length !== 0) {
                    // store price feeds into database
                    storePriceFeed.createMany(commonUtil.getValues(filterPriceFeed), (err, data) => {
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