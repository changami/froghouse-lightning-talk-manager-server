var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Presentation = require('./api/models/presentation-model'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var DBHost = process.env.MONGODB_ADDRESS || "localhost";
mongoose.connect('mongodb://' + DBHost + '/FrogLightningTalkManager');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/presentation-routes');
routes(app);

// 404 handling
app.use(function (req, res, next) {
  res.status(404);
  if (req.accepts('json')) {
    res.send({error: 'Not found'});
  }
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
