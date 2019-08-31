var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/paymentRoute');

routes(app);

app.listen(port);

console.log('Payment RESTful API server started on: ' + port);