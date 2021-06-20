const serviceConfig = require('../config/service.config');
const { logging, getPriceFeeds, savePriceFeeds } = require('../util');
let pastPriceFeeds = [];

// start service
logging.title(`Started [SPY_PRICE_FEEDS_SERVICE] :: Timeout ${serviceConfig.spy.timeout}`);

setInterval(async () => {
    logging.func('[anonymous function]');
    const priceFeeds = await getPriceFeeds(serviceConfig.spy.companies);
    
    if(priceFeeds !== undefined) {
        // save prices feed into database
        savePriceFeeds(pastPriceFeeds, priceFeeds, (err, data) => {
            if(err) {
                if(err.kind === 'empty_data') {
                    logging.default('Got Empty Data.');
                    return;
                } else {
                    process.exit(0);
                }
            }

            logging.default(`Update past price feed: ${JSON.stringify(data)}`);
            pastPriceFeeds = data;
        });
    }

}, serviceConfig.spy.timeout);