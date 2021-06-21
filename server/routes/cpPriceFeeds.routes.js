const express = require('express');
const router = express.Router();
const CpPriceFeedsController = require('../controllers/cpPriceFeeds.controller');

router.get('/companies', CpPriceFeedsController.findCompanyList);
router.get('/price-feeds/:disp_id', CpPriceFeedsController.findPriceFeedsById);

module.exports = router;