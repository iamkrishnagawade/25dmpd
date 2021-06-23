const sql = require('../../connection/db');
const logging = require('../../util/logging.util');

// constructor
const App = function () {}

App.getComapnyList = result => {
    const query = `SELECT 
                        cc.disp_id,
                        cd.company
                    FROM com_details cd
                    INNER JOIN cp_company cc ON
                        cc.disp_id = cd.disp_id
                    WHERE cc.is_active = 1`;

    sql.query(query, (err, res) => {
        if(err) {
            logging.error(err);
            result(err, null);
        } 

        logging.default(`Companies: ${JSON.stringify(res)}`);
        result(null, res);
    });
}

App.getPriceFeedById = (disp_id, result) => {
    const query = `SELECT
                        disp_id,
                        se_type,
                        spying,
                        pricecurrent,
                        pricechange,
                        tot_buy_qty,
                        tot_sell_qty 
                    FROM com_price_feeds cpf
                    WHERE disp_id = ?
                    ORDER BY se_type DESC`;
    
    sql.query(query, [disp_id], (err, res) => {
        if(err) {
            logging.error(err);
            result(err, null);
        } 

        logging.default(`Price Feeds: ${JSON.stringify(res)}`);
        result(null, res);
    });
}

module.exports = App;