const cpPriceFeedsModel = require('../models/cpPriceFeeds.model');

exports.findCompanyList = (req, res) => {
    cpPriceFeedsModel.getComapnyList((err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving companies.'
            });
        } else {
            res.send(data);
        }
    })
}

exports.findPriceFeedsById = (req, res) => {
    cpPriceFeedsModel.getPriceFeedById(req.params.disp_id, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving price feeds.'
            });
        } else {
            res.send(data);
        }
    })
}