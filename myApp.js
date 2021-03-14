var express = require('express');
var app = express();
require('dotenv').config();

response = __dirname + "/views/index.html";

app.get('/',function(req, res){
    res.sendFile(response);
});

app.use('/public', express.static(__dirname + '/public'));

obj = {"message": "Hello json"};

app.get('/json', function(req,res){
    /**if(process.env.MESSAGE_STYLE === 'uppercase'){
        msg = msg.toUpperCase();
    }    
    res.json(obj);
    */
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({'message' : 'HELLO JSON'});
    }
    res.json({'message' : 'Hello json'});
});





























 module.exports = app;
