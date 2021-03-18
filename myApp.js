var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser')

/**
app.get('/name', function(req,res){
    res.json({'name' : req.query.first + ' ' + req.query.last});
});
 */
app.use(bodyParser.urlencoded({extended: false}));

/**
app.route('/name').get(function(req,res){
    res.json({'name' : req.query.first + ' ' + req.query.last});
}).post(function(req,res){
    res.json({'name' : req.query.first + ' ' + req.query.last});
});


app.get("/:word/echo", function(req,res){
    res.json({'echo' : req.params.word})
});

app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({time:req.time});

});

response = __dirname + "/views/index.html";

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

app.use(function(req, res, next){
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});
*/


























 module.exports = app;
