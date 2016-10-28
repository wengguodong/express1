CREATE TABLE `t_express_user` (
	`user_id` VARCHAR(50) NOT NULL COMMENT '玩家id',
	`user_name` VARCHAR(50) NOT NULL COMMENT '用户名',
	`pass_word` VARCHAR(50) NOT NULL COMMENT '密码',
	`e_mail` VARCHAR(50) NOT NULL COMMENT '邮箱',
	PRIMARY KEY (`user_id`)
)