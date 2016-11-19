var mysql=require('mysql');

var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     database: 'vue',
     password: ''
 });

var UserController = {
	index: (req, res, err) => {
		connection.query('SELECT * FROM articles', function(err, results) {
			if (err) throw err

			res.json(results);
		});
	}
}

module.exports = UserController;