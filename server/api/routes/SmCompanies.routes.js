const express = require('express');
const router = express.Router();
const SmCompaniesController = require('../controllers/smCompanies.controller');

router.get('/', SmCompaniesController.findAll);

module.exports = router;