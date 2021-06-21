const sql = require('../../connection/db');
const logging = require('../../util/logging.util');

// constructor
const CpPriceFeeds = function () {}

CpPriceFeeds.getComapnyList = result => {
    const query = 'SELECT DISTINCT disp_id, company FROM cp_price_feeds cpf';
    
    sql.query(query, (err, res) => {
        if(err) {
            logging.error(err);
            result(err, null);
        } 

        logging.default(`Companies: ${JSON.stringify(res)}`);
        result(null, res);
    });
}

CpPriceFeeds.getPriceFeedById = (disp_id, result) => {
    const query = 'SELECT DISTINCT disp_id, se_type, pricecurrent, pricechange, tot_buy_qty, tot_sell_qty FROM cp_price_feeds cpf WHERE disp_id = ? GROUP BY disp_id, se_type ORDER BY created_at DESC';

    sql.query(query, [disp_id], (err, res) => {
        if(err) {
            logging.error(err);
            result(err, null);
        } 

        logging.default(`Price Feeds: ${JSON.stringify(res)}`);
        result(null, res);
    });
}

module.exports = CpPriceFeeds;