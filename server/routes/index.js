
const 	express = require("express"),
		router	= express.Router();

// Landing page
router.get("/", (req, res) => {
    res.render("index");
});

// Exports
module.exports = router;
