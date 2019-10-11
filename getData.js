const express = require('express');
const app = express();
const bodyParser=require("body-parser");
var mysql = require('mysql');
app.use(bodyParser.json())

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Anjali2018@',
    database : 'Department'
});
connection.connect();
app.get('/get', function(req, res){
    connection.query('select * from car', function(error, results){
        if ( error ){
            res.status(400).send('Error in database operation....');
        } else {
            res.send(results);
        }
    });
});

//post data 
app.post('/submit',function(req, res) {
    id1=req.body.id
    Model1=req.body.Model
    Wheels1=req.body.Wheels
    Doors1=req.body.Doors
    Type1=req.body.Type
    values=[id1,Model1,Wheels1,Doors1,Type1];
    var sql = "INSERT INTO Vahicles (id,Model, Wheels,Doors,Type) VALUES (?,?,?,?,?)";
    connection.query(sql,values, function(err, result)  {
        if(err){
            res.send(400).send("table created");
        }else{
            res.send("nghfuyhjyufhjg");
        }
    });
});

//update data  by id
app.put('/update/:id',function(req, res){
    id=req.params.id
    Wheels1=req.body.Wheels
    var sql = "UPDATE Vahicles SET  Wheels1=? WHERE id =" +id;
    
    connection.query(sql,Wheels1,function(err, result) {
        if(err){
            res.send(400).send("table created");
        }else{
            res.send("Record Updated!!");
        }
    });
});


app.put('/update', function (req, res) {
    connection.query('UPDATE Vahicles SET Model=?,Wheels=?,Doors=? where id=?', [req.body.Model,req.body.Wheels, req.body.Doors, req.body.id], function (error, results) {
       if (error) throw error;
       res.end(JSON.stringify(results));
    });
});

app.delete('/delete', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM Vahicles WHERE id=?', [req.body.id], function (error) {
        if (error) throw error;
            res.end('Record has been deleted!');
        });
    });
app.listen(8000, function () {
    console.log("Express server is listening on port 8000....");
});