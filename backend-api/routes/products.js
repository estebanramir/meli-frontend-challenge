/**
 * Permite acceder a las operaciones sobre un recurso de compañia
 */

const express = require('express');
const products = require('../src/products');
const productDetail = require('../src/productDetail');
let router = express.Router();

/* GET para obtener una compañia en particular */
router.get('/', products.fetchProductsList);
router.get('/:itemId', productDetail.fetchProductById);

module.exports = router;
