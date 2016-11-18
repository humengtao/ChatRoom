var router = require('express').Router();
var authController = require('../controllers/AuthController');

router
	.get('/', authController.index)


module.exports = router;