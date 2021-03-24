
const express = require('express');
const ProductsController = require('./controllers/ProductsController');

const router = express.Router();

// get all products (param filter by category)
router.get('/products', ProductsController.all);

module.exports = router;