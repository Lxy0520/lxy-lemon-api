var express = require('express');
var router = express.Router();

var userApi = require('./users_api');
/* GET users listing. */
router.post('/api/addlist', userApi.addUser);
module.exports = router;