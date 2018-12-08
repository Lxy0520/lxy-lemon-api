var query = require('../../mysql/mysql');
var sql = require('../../mysql/sql');
var selectUser = function(req, res, next) {
    query(sql.SELECT_ALL, function(err, result) {
        if (err) {
            res.json({ code: 0, err })
        }
        res.json({ code: 1, data: result })
    })
}
module.exports = {
    selectUser: selectUser
}