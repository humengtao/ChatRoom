var router = require('express').Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'vue',
    password: ''
});
/* GET home page. */
connection.connect(function(err) {
    if (err) throw err
});

router
    .get('/', function(req, res, next) {
        connection.query('SELECT * FROM articles', function(err, results) {
            if (err) throw err

            var re = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;

            results.map(function(index, elem) {
                index.content = markdown.toHTML(index.content);
            });
            res.json(results);
        });
    })

module.exports = router;
