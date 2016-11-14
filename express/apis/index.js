var router = require('express').Router();
var mysql = require('mysql');

router
    .get('/', function(req, res, next) {
         resp.json({'name':'hello'});
    })

module.exports = router;
