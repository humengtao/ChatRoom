var router = require('express').Router();

/* GET users listing. */

router
	.get('/hello', function(req, res, next) {
		var data = {
			api_name: 'users',
			if_login: true,
		};
		res.json(data);
	});

module.exports = router;