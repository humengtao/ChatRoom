var router = require('express').Router();
var userController = require('../controllers/UserController');
/* GET users listing. */

router
	.get('/', userController.index)

module.exports = router;