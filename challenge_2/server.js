//
const express = require ('express');
const bodyParser = require("body-parser");
const app = express();
const port= 3000;



app.use(express.static(__dirname + '/client')) 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var info=



function JsonToCSV (data){

	var id= Object.keys(data);
	var str = '';

    for (var i = 0; i < id.length; i++) {
        var line = '';
        for (var j in id[i]) {
            if (line != '') line += ','

            line += id[i][j];
        }

        str += line + '\r\n';
    }

    return str;
	}




app.post('/csv', function (req, res) {
	
	const data = JSON.parse(req.body.myInfo);
	
	//res.render('index');

	var x =res.json(data)


	res.send(x)
	
	//res.send({ user: 'tobi' })
	// console.log('Hello World');
	// res.print(req.body)
 //        data = json.loads(req.body.decode('utf-8'))
	res.end()
})




app.listen(port, function(){
	console.log('Server is running on port 3000')
})