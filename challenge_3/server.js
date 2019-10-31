const express = require ('express');
const bodyParser = require("body-parser");
const db = require("./database/database1.js");
const app = express();
const port= 8080;



app.use(express.static('public')) 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', function (req, res) { // respone to the user with the info saved in db
//     //    db.find(function (err, information) {
//         if (err) {
//             console.log(err);
//             res.send('error');
//         } else {
// 			console.log('Hi I am the retrive data')
//             //res.json(information);
//         }
//     // });
// });

app.post('/certification', function (req, res) {
	// db.find(function (err, information) {
	//  if (err) {
		 console.log('err');
	// 	 res.send('error');
	//  } else {
	// 	 console.log('saved the data')
	// 	 //complete here !!! save it to the data base
	//  }
//  });
});


app.listen(port, function(){
	console.log('Server is listening on port 8080')
})
