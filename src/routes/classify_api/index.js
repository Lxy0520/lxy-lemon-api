var sql = require('../../mysql/sql'); //sql语句

var query = require('../../mysql/mysql');

var uuid = require('node-uuid');
//查询图标列表
var selectIcon = function(req, res, next) {
    query(sql.SELECT_ICON, function(err, result) {
        console.log(result)
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
}

//添加分类
var addClassify = function(req, res, next) {
    var params = req.body;
    var c_name = params.c_name,
        c_icon = params.c_icon,
        c_type = params.c_type,
        uid = params.uid;
    if (!c_name || !c_icon || !c_type || !uid) {
        res.json({ code: 4, msg: "缺少参数" })
    } else {
        isHasclassify();
    }

    function isHasclassify() {
        query(sql.CLASSIFY_ISHAS, [uid, c_name], function(err, result) {
            if (err) {
                res.json({ code: 0, err })
            }
            if (result.length > 0) {
                res.json({ code: 3, msg: "此分类已存在" })
            } else {
                add();
            }
        })
    }

    function add() {
        var cid = uuid.v1();
        query(sql.ADD_CLASSIFY, [cid, c_name, c_icon, c_type, uid], function(err, results) {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                res.json({ code: 1, msg: "添加成功", cid: cid })
            }
        })
    }
}

//查询所有分类
var getClassify = function(req, res, next) {
    var uid = req.query.uid;
    if (uid) {
        query(sql.SELECT_ALL_C, [uid], function(err, result) {
            if (err) {
                return res.json({ code: 0, msg: err })
            }
            res.json({ code: 1, msg: result })
        })
    } else {
        res.json({ code: 4, msg: "缺少参数" })
    }
}
module.exports = {
    selectIcon: selectIcon,
    addClassify: addClassify,
    getClassify: getClassify
}