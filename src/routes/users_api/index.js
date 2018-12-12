var query = require('../../mysql/mysql');
var sql = require('../../mysql/sql');
var uuid = require('node-uuid');
var addUser = function(req, res, next) {
    var uid = uuid.v1();
    var nick_name = req.body.nick_name || null;
    query(sql.SELECT_ADD, [uid, nick_name], function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err })
        }
        res.json({ code: 1, mag: "添加成功", uid: uid })
    })
}
module.exports = {
    addUser: addUser
}