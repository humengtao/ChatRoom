var mysql = require('mysql');
var LoginValidator = require('../validators/LoginValidator');

// 建立数据库连接
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'chatroom',
	password: ''
});

// set session global
var sess = '';

var AuthController = {

	//register entry
	register: (req, res, err) => {

		// 验证用户输入合法
		if (LoginValidator.validate(req.body.username, req.body.password)) {

			//查询是否存在请求的用户名
			connection.query('SELECT * FROM users where username="' + req.body.username + '"', function(err, results) {
				if (err) throw err;

				//如果查出存在返回500
				if (results.length > 0) {
					res.status(500).send('exist');
				} else {

					// 插入用户注册信息
					connection.query('INSERT INTO users (id,username,password) VALUES("","' + req.body.username + '","' + req.body.password + '")', () => {
						if (err) throw err;

						// 插入成功后设置session
						req.session.username = req.body.username;
						req.session.session_id = req.session.id
						req.session.login = true;
						sess = req.session;
						res.status(200).send(sess);
					});
				}
			});

			// 用户输入不合法
		} else {
			res.status(500).send('wrongful');
		}

	},

	//login entry
	login: (req, res, err) => {
		
		//检测是否存在与客户端的session
		if (!!sess) {
			res.status(200).send(sess);
		} else {
			connection.query('SELECT * FROM users where username="' + req.body.username + '" and password="' + req.body.password + '"', function(err, results) {
				if (err) throw err;

				//如果查出存在设置session
				if (results.length > 0) {
					req.session.username = req.body.username;
					req.session.session_id = req.session.id
					req.session.login = true;
					sess = req.session;
					res.status(200).send(sess);
				} else {

					// 用户名或密码不正确，登录失败
					res.status(500).send('failed');
				}
			});
		}
	},

	//logout
	logout: (req, res, err) => {
		console.log(sess);

		if (!!sess.login) {
			sess = null;
			res.status(200).send('logout success');
		} else {
			res.status(500).send('logout failed');
		}

	}
}

module.exports = AuthController;