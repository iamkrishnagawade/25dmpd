const sql = require('./db');

// constructor
const SmCompanies = function() { };

SmCompanies.getAll = result => {
    sql.query('SELECT * FROM sm_companies', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Companies: ", res);
        result(null, res);
    })
}

module.exports = SmCompanies;