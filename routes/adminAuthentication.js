var http = require('http');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
      res.render("adminAuthentication");
});

module.exports = router;