var express = require('express');
var app = express();
require('dotenv').config();

response = __dirname + "/views/index.html";

/**
app.get('/',function(req, res){
    res.sendFile(response);
});


app.use('/public', express.static(__dirname + '/public'));

obj = {"message": "Hello json"};

app.get('/json', function(req,res){
    
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({'message' : 'HELLO JSON'});
    }else{
        res.json({'message' : 'Hello json'});
    }
});

*/

app.use(function(req, res, next){
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});



























 module.exports = app;
