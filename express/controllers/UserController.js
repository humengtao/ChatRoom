var mysql=require('mysql');

var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     database: 'vue',
     password: ''
 });

var UserController = {
};

module.exports = UserController;
