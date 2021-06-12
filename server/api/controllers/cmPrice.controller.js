const CmPriceModel = require('../models/cmPrice.model');

exports.findAll = (req, res) => {
    CmPriceModel.getAll((err, data) => {
        if(err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Prices."
            });
        } else {
            res.send(data);
        }
    })
}