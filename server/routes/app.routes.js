const express = require('express');
const router = express.Router();
const AppController = require('../controllers/app.controller');

router.get('/companies', AppController.findComapnyList);
router.get('/companies/price-feeds/:disp_id', AppController.findPriceFeedsById);
router.get('/companies/price-feeds/:disp_id/details', AppController.findCompnayDetailsById);
router.get('/companies/price-feeds/:disp_id/price-details', AppController.findCompnayPricesById);

module.exports = router;