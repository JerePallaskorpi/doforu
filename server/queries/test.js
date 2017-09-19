const 	mysql 	= require("mysql"),
				express = require("express"),
				app			= express();

const asd = () => {
	// Connect to database
	const connection = mysql.createConnection({
	  host      : "localhost",
	  user      : "admin",
	  password  : "admin",
	  database  : "doforu"
	});

	const q = "SELECT name FROM search";

	// MySQL queries
	rr = connection.query(q, (error, results) => {
		if (error) throw error;

		let yyt = "asdmjkomjsadfkol";
		emails = [];
		results.forEach((e) => {
		  emails.push([e.name]);
		});  
		return "koita ny vittu";
	});
	return rr;
};

module.exports = asd;
