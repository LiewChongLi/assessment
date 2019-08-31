module.exports = function(app) {
    var payment = require('../controllers/paymentController');

    app.get('/', (req, res) => {
        res.status(404).send('Page Not Found 404 Error !!!');
    })

    app.route('/process-payment')
        .post(payment.process_payment)

}