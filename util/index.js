const logging = require('./logging.util');
const { getPriceFeeds, savePriceFeeds } = require('./cpPrice.util');

module.exports = {
    logging,
    getPriceFeeds,
    savePriceFeeds
};