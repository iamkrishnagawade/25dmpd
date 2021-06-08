const sql = require('../../api/models/db');

// constructor
const Index = function() {  }

Index.createMany = (newIndex, result) => {
    const query = 'INSERT INTO cap_index (`ind_id`, `stkexchg`, `exchange`, `region`, `bridgesymbol`, `open`, `high`, `low`, `lastprice`, `prevclose`, `change`, `percentchange`) VALUES ?';
    sql.query(query, [newIndex], (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, ...newIndex });
    });
}

module.exports = Index;