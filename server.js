var express = require('express');
var bodyParser = require('body-parser');
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', null);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, app-id');
    if (req.method === "OPTIONS")
        res.sendStatus(200);
    else
        next();
}
app = express();
app.use(bodyParser.json());
app.use(function (err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON');
        next(err);
    }
});

// assign route files to variables
var customer = require('./routes/customer');
var item = require('./routes/item');

app.use('/customer', allowCrossDomain, customer);
app.use('/item', allowCrossDomain, item);

app.listen(5252);