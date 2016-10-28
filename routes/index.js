var userDao = require("../dao/userDao");

module.exports = function(app) {
	  app.get('/', function (req, res) {
    	res.render('index', { title: '主页' });
  	});
  	app.get('/reg', function (req, res) {
    	res.render('reg', { title: '注册' });
  	});
  	app.post('/reg', function (req, res) {
      console.log(req.body);
      userDao.insertUser(req.body.name, req.body.password, req.body.email, function(err, res){
        if(err){
          console.log('insertUser err:' + err) ;
          return ;
        }
        console.log('insertUser success');
      });
      res.render('login', { title: '登录' });
  	});
  	app.get('/login', function (req, res) {
    	res.render('login', { title: '登录' });
  	});
  	app.post('/login', function (req, res) {
      console.log('点击登陆！');
  	});
  	app.get('/post', function (req, res) {
    	res.render('post', { title: '发表' });
  	});
  	app.post('/post', function (req, res) {
  	});
  	app.get('/logout', function (req, res) {
  	});
}
