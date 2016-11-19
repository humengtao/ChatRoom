var router = require('express').Router();
var authController = require('../controllers/AuthController');
router
	.post('/register', authController.register)
	.post('/login', authController.login)
	.get('/logout',authController.logout)


module.exports = router;