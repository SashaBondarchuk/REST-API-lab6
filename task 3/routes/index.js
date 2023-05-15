var express = require("express");
var router = express.Router();
const students = require('../public/javascripts/students');

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render('index', { title: 'Main page'});
});


module.exports = router;
