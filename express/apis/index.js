var router = require('express').Router();
var authController = require('../controllers/AuthController');
router
    .get('/init', authController.init)
	.post('/register', authController.register)
	.post('/login', authController.login)
	.get('/logout',authController.logout)
	// .get('/sess',authController.getCurrentSession)
	// .get('/connections',authController.getAllSessions)



module.exports = router;