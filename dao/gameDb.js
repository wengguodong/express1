var mysql = require('mysql');
var config = require('../config');
var logger = require('log4js').getLogger("gameDb");

var gamePool = exports.pool = mysql.createPool(config.game_db);

/**
 * 执行查询
 */
exports.execQuery = function (sql, args, handler, conn) {

    var doRelease = !conn;
    var cb = function (error, connection) {

        if (error) {
            logger.error('DB-获取数据库连接异常！');
            handler(error);
            return;
        }

        // 执行查询
        var query = connection.query(sql, args, function (error, results, fields) {
            if (doRelease) {
                connection.release();
            }
            if (error) {
                logger.error('DB-执行查询语句异常！');
            }

            // 处理结果
            handler(error, results, fields);
        });
        logger.info("threadId:" + connection.threadId + ", sql:" + query.sql);
    };

    if (conn) {
        cb(null, conn);
    } else {
        gamePool.getConnection(cb);
    }

};
