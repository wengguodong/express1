var gameDb = require('../../gameDb');
var config = require('../../../config');

module.exports.insertUser = function (userId, userName, passWord, eMail, handler, conn) {
    gameDb.execQuery("insert into t_pk_user (user_id, user_name, pass_word, e_mail) values (?,?,?,?)", [userId, userName, passWord, eMail], handler, conn);
};