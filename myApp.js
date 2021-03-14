var express = require('express');
var app = express();

response = __dirname + "/views/index.html";

app.get('/',function(req, res){
    res.sendFile(response);
});

































 module.exports = app;
