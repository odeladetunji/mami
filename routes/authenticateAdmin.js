var http = require('http');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
    res.render('Admin');    
});

module.exports = router;