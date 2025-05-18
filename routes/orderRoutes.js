const express = require('express');
const router = express.Router();
const { createOrder, getAllOrders } = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/', getAllOrders);

module.exports = router;
