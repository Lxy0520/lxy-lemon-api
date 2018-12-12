var sql = require('../../mysql/sql'); //sql语句
var query = require('../../mysql/mysql');
var uuid = require('node-uuid');

//添加账单
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

//查看账单
var getBill = function(req, res, next) {
    var create_time = req.query.create_time,
        uid = req.query.uid,
        time_type = req.query.time_type;
    var classify = req.query.classify || '';
    var classifyArr = [];
    if (!create_time || !uid) {
        res.json({ code: 4, msg: "缺少参数" })
    } else {
        var sqlStr;
        if (classify) {
            classify = JSON.parse(classify);
            classify.forEach(function(item) {
                classifyArr.push(decodeURI(item))
            })
            sqlStr = time_type == 1 ? sql.SELECT_YEAR_CBILL : sql.SELECT_MONTH_CBILL;
        } else {
            sqlStr = time_type == 1 ? sql.SELECT_YEAR_BILL : sql.SELECT_MONTH_BILL;
        }
        query(sqlStr, [uid, create_time, classifyArr], function(err, result) {
            if (err) {
                return res.json({ code: 0, msg: err })
            }
            res.json({ code: 4, msg: result })
        })
    }
}

//删除账单
var delBill = function(req, res, next) {
    var lid = req.query.lid;
    if (!lid) {
        res.json({ code: 4, msg: "缺少参数" })
    } else {
        query(sql.SELECT_DEL, [lid], function(err, result) {
            if (err) {
                return res.json({ code: 0, msg: err })
            }
            res.json({ code: 4, msg: "删除成功" })
        })
    }
}
module.exports = {
    addBill: addBill,
    getBill: getBill,
    delBill: delBill
}