var mysql = require('mysql');
var pool = mysql.createPool({
    user: 'root',
    password: 'root',
    host: 'localhost',
    database: 'lxy_lemon',
    connectionLimit: 100
});
module.exports = function(sql, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            return ck && ck(err)
        }
        con.query(sql, arr, function(err, result, file) {
            if (err) {
                return ck && ck(err)
            }
            ck && ck(null, result, file);
            con.release();
        })
    })
}