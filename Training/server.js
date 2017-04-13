var express = require('express');
var app = express();

app.get('/pickanumber', function(req, res) {
	var number = 10;
	if(req.query.number < 10) {
		res.send("Too Low");
	} else if(req.query.number > 10) {
		res.send("Too High");
	} else {
		res.send("Nailed it!")
	}
	
});

app.listen(3000);