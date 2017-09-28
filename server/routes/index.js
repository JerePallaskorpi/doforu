// Dependencies
const express = require("express"),
		  router	= express.Router();

// Landing page
router.get("/", (req, res) => {
    res.render("index", {userInfo: req.user});
});

// Exports
module.exports = router;
