var express = require('express');
var request = require('request');
var path = require('path');

var app = express();

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();
var today = year + "-" + day + "-" + month;

app.set('views,', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
   res.render('index');
});

app.get('/getTragedy', function(req, res) {
   request('http://newsapi.org/v2/everything?q=tragedy+death&from=' + today + '&to=' + today + '&sortBy=popularity&apiKey=0134dde2256b4b0094655407e52a5f86',
   //request('http://newsapi.org/v2/everything?q=tragedy&from=2018-02-21&to=2018-02-21&sortBy=popularity&apiKey=0134dde2256b4b0094655407e52a5f86',
      function(error, response, body) {
         if(!error) {
            var body = JSON.parse(body);
            res.json(body.articles);
         }
         else {
            console.log(err.message);
         }
      }
   );
});

app.get('/getEconomy', function(req, res) {
   request('http://newsapi.org/v2/everything?q=bad+news+economy&from=' + today + '&to=' + today + '&sortBy=popularity&apiKey=0134dde2256b4b0094655407e52a5f86',
   //request('http://newsapi.org/v2/everything?q=tragedy&from=2018-02-21&to=2018-02-21&sortBy=popularity&apiKey=0134dde2256b4b0094655407e52a5f86',
      function(error, response, body) {
         if(!error) {
            var body = JSON.parse(body);
            res.json(body.articles);
         }
         else {
            console.log(err.message);
         }
      }
   );
});

app.get('/getSocial', function(req, res) {
   request('http://newsapi.org/v2/everything?q=bad+news+culture+society&from=' + today + '&to=' + today + '&sortBy=popularity&apiKey=0134dde2256b4b0094655407e52a5f86',
   //request('http://newsapi.org/v2/everything?q=tragedy&from=2018-02-21&to=2018-02-21&sortBy=popularity&apiKey=0134dde2256b4b0094655407e52a5f86',
      function(error, response, body) {
         if(!error) {
            var body = JSON.parse(body);
            res.json(body.articles);
         }
         else {
            console.log(err.message);
         }
      }
   );
});

app.listen(3000);
