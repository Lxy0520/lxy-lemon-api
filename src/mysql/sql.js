module.exports = {
    //添加
    "SELECT_ADD": "insert into userlist (uid,nick_name) values (?,?)",
    //查询图标列表
    "SELECT_ICON": "select * from iconlist",
    //添加分类
    "ADD_CLASSIFY": "insert into classify (cid,c_name,c_icon,c_type,uid) values (?,?,?,?,?)",
    //查询分类是否存在
    "CLASSIFY_ISHAS": "select * from classify where (uid='*' or uid=?) and c_name=?",
    //查询所有分类
    "SELECT_ALL_C": "select * from classify where (uid='*' or uid=?)",
    //添加账单
    "ADD_BILL": "insert into billlist (lid,uid,cid,create_time,money) value (?,?,?,?,?)"
}