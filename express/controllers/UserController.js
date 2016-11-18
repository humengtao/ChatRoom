var UserController = {
	index: (req, res, err) => {
		res.send({
			'controller': 'user'
		});
	}
}

module.exports = UserController;