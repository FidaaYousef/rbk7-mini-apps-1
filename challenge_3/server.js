const express = require ('express');
const bodyParser = require("body-parser");
const database = require("./database/database1.js");
const app = express();
const port= 8080;



app.use(express.static(__dirname + '/client')) 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.listen(port, function(){
	console.log('Server is listening on port 8080')
})
