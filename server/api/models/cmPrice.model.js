const sql = require('./db');

// constructor
const CmPrice = function() { };

CmPrice.getAll = result => {
    sql.query('SELECT * FROM cm_prices', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Prices: ", res);
        result(null, res);
    })
}

module.exports = CmPrice;