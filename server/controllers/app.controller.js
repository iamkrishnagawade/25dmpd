const AppModel = require('../models/app.model');

exports.findComapnyList = (req, res) => {
    AppModel.getComapnyList((err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving companies.'
            });
        } else {
            res.send(data);
        }
    });
}

exports.findPriceFeedsById = (req, res) => {
    AppModel.getPriceFeedById(req.params.disp_id, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving price feeds.'
            });
        } else {
            res.send(data);
        }
    })
}