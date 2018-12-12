var express = require('express');
var router = express.Router();

var userApi = require('./users_api');
/* GET users listing. */
router.post('/api/addlist', userApi.addUser);
module.exports = router;
// select b.*,c.c_name,c_icon,c_type from billlist b,classify c,userlist u where b.uid='fb880680-e3bd-11e8-8d4e-a74b82a4d00f' and b.cid=c.cid and c.uid=u.uid and date_format(b.create_time,"%Y")="2018"