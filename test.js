var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'sys'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");  
} else {
    console.log("Error connecting database ... \n\n");  
}
});

app.get("/",function(req,response){
connection.query('SELECT * from employee LIMIT 2', function(err, rows, fields) {
connection.end();
  if (!err){
    /*response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(rows);*/
    console.log('The solution is: ', rows);
  }
  else
    console.log('Error while performing Query.');
  });
});

app.listen(3000);