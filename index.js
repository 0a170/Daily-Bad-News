var express = require('express');
var request = require('request');
var path = require('path');

var app = express();
var articleTitles = [];
var articleDescriptions = [];
var articles = {};

app.set('views,', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
   res.render('index');
});

app.get('/getNews', function(req, res) {
   request('http://newsapi.org/v2/top-headlines?q=bitcoin&from=2018-02-21&to=2018-02-21&sortBy=popularity&apiKey=0134dde2256b4b0094655407e52a5f86',
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
