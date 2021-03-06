var config     = require('../config/api.config.js');
var log        = require('../lib/log')('api');
var express    = require('express');
var bodyParser = require('body-parser');
var routes     = require('./routes');
var db         = new require('./lib/db.js')(config.get('sql'));
var cors       = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());

//define routes
app.get('/v1/accounts/:address/transactions', routes.accountTx);



//start the server
app.listen(config.get('port'));
log.info('Ripple Data API running on port ' + config.get('port'));

