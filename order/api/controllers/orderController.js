var request = require('request');
const express = require('express');

var router = new express.Router();

var order = [
    {id: 1, name: 'coffee', quantity: 2, price: 10, status: 'delivered', clientName: 'John', createdDate: new Date()},
    {id: 2, name: 'tea', quantity: 1, price: 10, status: 'delivered', clientName: 'Sam', createdDate: new Date()},
    {id: 3, name: 'chicken burger', price: 30, quantity: 3, status: 'delivered', clientName: 'Smith', createdDate: new Date()},
    {id: 4, name: 'latte', quantity: 4, price: 10, status: 'delivered', clientName: 'Legend', createdDate: new Date()},
    {id: 5, name: 'chicken chop', quantity: 1, price: 20, status: 'delivered', clientName: 'Kate', createdDate: new Date()},
]

exports.view_order = function(req, res) {
    res.send(order);
}

exports.view_specific_order = function(req, res) {
    const result = order.find(res => res.id == req.params.id);
    res.send(result);
}

exports.make_order = function (req, res) {
    order.push(req.body);
    var processed = request.post({url: 'http://localhost:3001/process-payment', form: req.body}, function(err, res, body) {
        if(body == 'confirmed')
        {
            updateStatus(req.body.id, 'confirmed');
            setTimeout(function() {
                updateStatus(req.body.id, 'delivered');
            }, 5000)
        }
        else if (body == 'declined')
        {
            updateStatus(req.body.id, 'cancelled');
        }
    });
    res.send(processed);
}

exports.update_order_status = function(req, res) {
    updateStatus(req.params.id, req.params.status)
    res.send(order);
}

exports.cancel_order = function(req, res) {
    var index = order.findIndex(res => res.id == req.params.id);
    order[index].status = 'cancelled';
    res.send(order);
}

function updateStatus(id: Number, status :String) {
    var index = order.findIndex(res => res.id == id);
    order[index].status = status;
}