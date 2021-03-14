var express = require('express');
var app = express();

response = "Hello Express";


app.get('/',function(req, res){
    res.send(response);
});

































 module.exports = app;
