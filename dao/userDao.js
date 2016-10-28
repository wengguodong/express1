var gameDb = require('./gameDb');
var config = require('../config');

module.exports.insertUser = function (userName, passWord, eMail, handler, conn) {
    gameDb.execQuery("insert into t_express_user (user_name, pass_word, e_mail) values (?,?,?)", [userName, passWord, eMail], handler, conn);
};

