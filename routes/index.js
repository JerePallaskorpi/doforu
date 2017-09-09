/*jshint esversion: 6 */

const express = require("express"),
			router	= express.Router();

// Landing page
router.get("/", function(req, res){
    res.render("index", {asd: "lmaooo"});
});

// Exports
module.exports = router;
