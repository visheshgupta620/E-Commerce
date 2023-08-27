const express = require('express');
const router = express.Router();
const { validateProduct, isLoggedIn, isSeller, isAuthor } = require('../middlewares');
const {
    showAllProducts, 
    productForm, 
    createNewProduct, 
    showProduct, 
    editProductForm, 
    editProduct,
    deleteProduct
} = require('../controllers/product');

router.route('/')
    .get(showAllProducts)
    .post(isLoggedIn, isSeller, validateProduct, createNewProduct);

router.route('/:id')
    .get(showProduct)
    .patch(isLoggedIn, isSeller, validateProduct, editProduct)
    .delete(isLoggedIn, isSeller, isAuthor, deleteProduct)

router.get('/new', isLoggedIn, isSeller, productForm);

router.get('/:id/edit', isLoggedIn, isSeller, isAuthor, editProductForm);

module.exports = router;