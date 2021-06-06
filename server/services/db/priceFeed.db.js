const sql = require('../../api/models/db');

// constructor
const PriceFeed = function() {  }

PriceFeed.createMany = (newFeeds, result) => {
    const query = 'INSERT INTO cap_price_feeds (disp_id, se_type, sc_subsec, sc_fullnm, symbol, nse_id, company, opn, hp, lp, pricecurrent, priceprevclose, pricechange, pricepercentchange, vol, tot_buy_qty, tot_sell_qty, pe) VALUES ?'; 
    sql.query(query, [newFeeds], (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, ...newFeeds });
    });
};

module.exports = PriceFeed;