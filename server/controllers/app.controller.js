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

exports.findCompnayDetailsById = (req, res) => {
    AppModel.getCompnayDetailsById(req.params.disp_id, (err, data) => {
        if(err) {
            if(err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found Company details with id ${req.params.disp_id}.`
                });
            } else {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving price feeds.'
                });
            }
        } else {
            res.send(data);
        }
    })
}

exports.findCompnayPricesById = (req, res) => {
    AppModel.getCompnayPricesById(req.params.disp_id, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving price feeds.'
            });
        } else {
            res.send(data);
        }
    })
}