// homepage module;
var http = require('http');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
      res.render('homepage');
});

module.exports = router;