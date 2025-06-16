const {model} = require('mongoose');

const {OrderSchema} = require("../schemas/OrederSchema");

const OrderModel = new model("order", OrderSchema);

module.exports = {OrderModel};