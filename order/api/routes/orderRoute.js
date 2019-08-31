module.exports = function(app) {
    var order = require('../controllers/orderController');

    app.get('/', (req, res) => {
        res.status(404).send('Page Not Found 404 Error !!!');
    })

    app.route('/view-order')
        .get(order.view_order)

    app.route('/make-order')
        .post(order.make_order)

    app.route('/cancel-order/:id')
        .post(order.cancel_order)

    app.route('/update-order-status/:id')
        .post(order.update_order_status)

    app.route('/view-specific-order/:id')
        .get(order.view_specific_order)
}