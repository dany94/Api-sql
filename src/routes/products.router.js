import {Router} from "express";
import {createNewProduct, deleteProductById, getProductById, getProducts, getTotalProducts, updateProductById} from '../controllers/products.controller'

const router = Router()

router.get('/products/:id',getProductById)

router.post('/products',createNewProduct)

//router.get('/products/count',getTotalProducts)

router.delete('/products/:id',deleteProductById)

router.put('/products/:id',updateProductById)

router.get('/products',getProducts)

export default router