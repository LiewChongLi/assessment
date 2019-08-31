var payment_detail = [
    {id: 1, name: 'coffee', quantity: 2, price: 10, status: 'delivered', client_name: 'John', created_date: new Date()},

]

const status = ['confirmed', 'declined']

exports.process_payment = function(req, res) {
    var randomStatus = status[Math.floor(Math.random() * status.length)];
    res.send(randomStatus)
}