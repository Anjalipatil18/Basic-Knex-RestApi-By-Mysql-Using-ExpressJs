var express = require("express");
var knex=require("knex");
var app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.get("/todos",function(req,res){
    knex.raw("select * from toods").then(function(todos){
        res.send(todos)
    })
})

app.listen(8082,function(){
    console.log("listening on port 8082.....");
})
