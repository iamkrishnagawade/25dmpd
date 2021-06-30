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
                        cpf.opn,
                        cpf.priceprevclose,
                        pricecurrent,
                        pricechange,
                        cpf.pricepercentchange,
                        tot_buy_qty,
                        tot_sell_qty,
                        cpf.hp,
                        cpf.lp,
                        cpf.vol
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

App.getCompnayDetailsById = (disp_id, result) => {
    const query = `SELECT 
                    cc.disp_id,
                    cc.is_active,
                    cd.sc_subsec,
                    cd.sc_fullnm,
                    cd.symbol,
                    cd.nse_id,
                    cd.company
                FROM cp_company cc
                INNER JOIN com_details cd ON 
                    cd.disp_id = cc.disp_id
                INNER JOIN com_price_feeds cpf ON 
                    cpf.disp_id = cc.disp_id
                WHERE cc.disp_id = ?
                GROUP BY cc.disp_id`;
    
    sql.query(query, [disp_id], (err, res) => {
        if(err) {
            logging.error(err);
            result(err, null);
        } 

        if (res.length) {
            logging.default(`found details: ${JSON.stringify(res[0])}`);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
}

App.getCompnayPricesById = (disp_id, result) => {
    const query = `SELECT 
                    cc.disp_id,
                    cpf.se_type,
                    cpf.spying,
                    cpf.opn,
                    cpf.hp,
                    cpf.lp,
                    cpf.pricecurrent,
                    cpf.priceprevclose,
                    cpf.pricechange,
                    cpf.pricepercentchange,
                    cpf.vol,
                    cpf.tot_buy_qty,
                    cpf.tot_sell_qty,
                    cpf.pe
                FROM cp_company cc
                INNER JOIN com_details cd ON 
                    cd.disp_id = cc.disp_id
                INNER JOIN com_price_feeds cpf ON 
                    cpf.disp_id = cc.disp_id
                WHERE cc.disp_id = ?`;
    
    sql.query(query, [disp_id], (err, res) => {
        if(err) {
            logging.error(err);
            result(err, null);
        } 

        logging.default(`Company: ${JSON.stringify(res)}`);
        result(null, res);
    });
}

module.exports = App;