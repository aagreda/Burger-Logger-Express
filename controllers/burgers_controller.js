var express = require("express");
var router = express.Router();
var queries = require("../models/burger.js");


router.get('/', function(req, res){
	queries.getBurgers(function(data){
		var data1 = {
			burgerData: data
		}
		res.render('index', data1);
	});
});

router.post('/create', function(req,res){
	queries.addBurger(req.body.item, function(data){
		res.redirect('/');
	});
});

router.put("/:id", function(req, res){
	queries.updateBurger(req.body.id, function(data){
		res.redirect('/')
	});
});


module.exports = router;