var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser')

// Deals with urlencoded data, extended: false tells the parser to use the classic encoding. 
// When using it, values can be only strings or arrays. 
// The extended version allows more data flexibility, but it is outmatched by JSON. 
app.use(bodyParser.urlencoded({extended: false}));

// Serving /name directory with get or post responses
app.route('/name').get(function(req,res){
    res.json({'name' : req.query.first + ' ' + req.query.last});
}).post(function(req,res){
    res.json({'name' : req.body.first + ' ' + req.body.last});
});

// Serving the root directory with a page
response = __dirname + "/views/index.html"; 
app.get('/',function(req, res){
    res.sendFile(response);
});

// 
app.use('/public', express.static(__dirname + '/public'));


/**
 * Echo server getting parameter from url
app.get("/:word/echo", function(req,res){
    res.json({'echo' : req.params.word})
});

 * Get response getting parameter from url
app.get('/name', function(req,res){
    res.json({'name' : req.query.first + ' ' + req.query.last});
});

 * Date server
app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({time:req.time});

});

 * Using .env configure file
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
