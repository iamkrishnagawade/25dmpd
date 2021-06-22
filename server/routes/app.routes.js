const express = require('express');
const router = express.Router();
const AppController = require('../controllers/app.controller');

router.get('/companies', AppController.findComapnyList);
router.get('/price-feeds/:disp_id', AppController.findPriceFeedsById);

module.exports = router;