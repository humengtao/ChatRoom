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

	//init session(touch if none)
	init: (req, res, err) => {
		if (!sess) {
			AuthController.setVisitorSession(req);
		}
		res.status(200).send(sess);
	},

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

					// 删除成功后设置登录用户的session(更新原有session)
					AuthController.setUserSession(req);
					res.status(200).send(sess);
				}
			});

			// 用户输入不合法
		} else {
			res.status(500).send('wrongful');
		}

	},

	//login entry
	login: (req, res, err) => {

		//检测是否存在该用户并比对密码
		connection.query('SELECT * FROM users where username="' + req.body.username + '" and password="' + req.body.password + '"', function(err, results) {
			if (err) throw err;

			//如果查出存在设置session
			if (results.length > 0) {
				AuthController.setUserSession(req);
				res.status(200).send(sess);
			} else {

				// 用户名或密码不正确，登录失败
				res.status(500).send('failed');
			}
		});
	},

	//logout
	logout: (req, res, err) => {

		if (!!sess.login) {

			//删除登录用户的session
			connection.query('DELETE FROM connections where username="' + sess.username + '"');

			// 重新生成新的游客session
			AuthController.setVisitorSession(req);
			res.status(200).send(sess);
		} else {
			res.status(500).send('logout failed');
		}

	},

	//set visitors session
	setVisitorSession: (req) => {

		//create a random name for visitors
		req.session.username = "visitor" + ~~(Math.random() * 100000000);
		req.session.session_id = req.session.id
		req.session.login = false;
		if (!!req.session.isNew) {
			req.session.isNew = false;
		} else {
			req.session.isNew = true;
		}
		sess = req.session;
		//insert visitor into connetion table  
		connection.query('INSERT INTO connections (id,username) VALUES("","' + sess.username + '")');
	},
	//set login user session
	setUserSession: (req) => {
		console.log(req.body.username);
		console.log(sess.username);


		// 更新session
		connection.query('UPDATE connections set username="' + req.body.username + '" where username="' + sess.username + '"');

		req.session.username = req.body.username;
		req.session.session_id = req.session.id
		req.session.login = true;
		if (!!req.session.isNew) {
			req.session.isNew = false;
		} else {
			req.session.isNew = true;
		}
		sess = req.session;

	},

	getCurrentSession: () => {
		return sess;
	},

	getAllConnections: (io) => {
		var onlineUsers = [];
		connection.query('SELECT * FROM connections', (err, results) => {
			results.map((index) => {
				onlineUsers.push(index);
			});
			console.log(onlineUsers);
			io.emit('server:allUser', onlineUsers);
		});
	},

	deleteConnection: (io, user) => {
		io.emit('server:userLeave', user);
		// connection.query('DELETE FROM connections where username="' + user + '"', () => {
		connection.query('SELECT * FROM connections', (err, results) => {
			var onlineUsers = [];
			results.map((index) => {
				onlineUsers.push(index);
			});
			io.emit('server:allUser', onlineUsers);
		});
		// });
	},
}

module.exports = AuthController;