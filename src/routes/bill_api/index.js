var sql = require('../../mysql/sql'); //sql语句
var query = require('../../mysql/mysql');
var uuid = require('node-uuid');
var addBill = function(req, res, next) {
    var params = req.body,
        uid = params.uid,
        cid = params.cid,
        create_time = params.create_time,
        money = params.money;
    if (!uid || !cid || !create_time || !money) {
        res.json({ code: 0, msg: "缺少参数" })
    } else {
        var lid = uuid.v1();
        query(sql.ADD_BILL, [lid, uid, cid, create_time, money], function(err, result) {
            if (err) {
                return res.json({ code: 0, msg: err })
            }
            res.json({ code: 1, msg: "添加成功" })
        })
    }
}
module.exports = {
    addBill: addBill
}