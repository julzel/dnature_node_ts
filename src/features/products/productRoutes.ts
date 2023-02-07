import express, { Router } from 'express';
import Product from './productController';
const router: Router = express.Router();

router.get('/:id', Product.readById);
router.get('/', Product.readAll);

export default router;
