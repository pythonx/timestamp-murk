const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
var app = express();


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get("/", function(req, res)

{

	res.end("hey there ..");

}
	);




