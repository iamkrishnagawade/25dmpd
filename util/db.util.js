const sql = require('../connection/db');
const logging = require('./logging.util');

exports.insertPriceFeedsIntoDB = (feeds, result) => {
    const query = 'INSERT INTO cp_price_feeds (disp_id, se_type, sc_subsec, sc_fullnm, symbol, nse_id, company, opn, hp, lp, pricecurrent, priceprevclose, pricechange, pricepercentchange, vol, tot_buy_qty, tot_sell_qty, pe) VALUES ?';

    sql.query(query, [feeds], (err, res) => {
        if(err) {
            logging.error(err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, ...feeds });
    });
}