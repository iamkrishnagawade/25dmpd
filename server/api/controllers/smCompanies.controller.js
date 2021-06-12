const SmCompaniesModel = require('../models/smCompanies.model');

exports.findAll = (req, res) => {
    SmCompaniesModel.getAll((err, data) => {
        if(err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving companies."
            });
        } else {
            res.send(data);
        }
    })
}