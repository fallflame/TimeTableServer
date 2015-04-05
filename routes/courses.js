var express = require('express');
var router = express.Router();
var Course = require('../models/course');


router.get('/', function(req, res){
	Course.getAllCourses(function(err, docs){
		if(err){
			res.json({err:"Cannot get courses."});
		} else {
			res.json(docs);
		}
		res.end();
	})
})


router.get('/populate', function(req, res) {

	var demoCourses = require('../models/demoCourses').data;
	demoCourses.forEach(function(aCourse){
		Course.addNewCourse(aCourse, function(err, doc){
			if(err){
				console.log(err);
			}
		})
	});

	res.end("Populated");

});


module.exports = router;