var express = require('express');
var router = express.Router();
const students = require('../public/javascripts/students');


/* GET student by login. */
router.get("/", function (req, res, next) {  
  res.render('students', { title: 'Students', students: students });
});

router.get("/:login", function (req, res, next) {  
  res.render('student', { title: 'StudentPage', student: students.find(s => s.login === req.params.login)});
});

module.exports = router;
