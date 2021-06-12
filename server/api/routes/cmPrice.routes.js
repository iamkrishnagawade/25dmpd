const express = require('express');
const router = express.Router();
const CmPriceController = require('../controllers/cmPrice.controller');

router.get('/', CmPriceController.findAll);

module.exports = router;