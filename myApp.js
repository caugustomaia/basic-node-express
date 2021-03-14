var express = require('express');
var app = express();

response = __dirname + "/views/index.html";

app.get('/',function(req, res){
    res.sendFile(response);
});

app.use('/public', express.static(__dirname + '/public'));

obj = {"message": "Hello json"};

app.get('/json', function(req,res){
    res.json(obj);
});





























 module.exports = app;
