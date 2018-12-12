var express = require('express');
var router = express.Router();

var billApi = require('./bill_api');
/* GET users listing. */
router.post('/api/addBill', billApi.addBill);

module.exports = router;