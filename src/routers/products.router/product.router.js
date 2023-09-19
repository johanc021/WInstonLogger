import { Router } from 'express';
import productController from '../../controllers/product.controller.js';
import isAdmin from '../../config/middlewareAuth/authRole/isAdmin.js';
import { authenticate } from '../../config/middlewareAuth/authAuthenticate/authenticate.js';
import compression from 'express-compression'

class ProductRouter {
    constructor() {
        this.router = Router();
        this.router.get('/', authenticate, compression(), productController.getAllProducts);
        this.router.get('/:productId', authenticate, productController.getProductById);
        this.router.post('/', authenticate, isAdmin, productController.createProduct);
        this.router.put('/:productId', authenticate, isAdmin, productController.updateProduct);
        this.router.delete('/:productId', authenticate, isAdmin, productController.deleteProduct);
    }

    getRouter() {
        return this.router;
    }
}

export default ProductRouter;
