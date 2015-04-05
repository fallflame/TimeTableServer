var db = require('../lib/db');

var EventSchema = new db.Schema({

	title 		: {type: String, required: true},
	startTime 	: {type: Date, required: true},
	endTime 	: {type: Date, required: true},
	location   	: String

});

var CourseSchema = new db.Schema({

	title 		: {type: String, required: true},
	number		: String,
	subject		: String,
	courseDescription : String,
	updatedAt 	: { type : Date, default : Date.now},
	events 	: [EventSchema]

});

var Course = db.mongoose.model('Course', CourseSchema);

exports.getAllCourses = function (callback){
	Course
	.find({})
	.exec(function(err, docs){
		callback(err, docs);
	});
}

exports.addNewCourse = function (newCourse, callback) {

	var instance
	instance = new Course(newCourse);

	instance.save(function(err, doc){
		callback(err, doc);
	});
}
