import express, { Router } from 'express';
import User from './userController';
const router: Router = express.Router();

router.post('/', User.create);
router.get('/:id', User.readById);
router.get('/', User.readAll);
router.put('/:id', User.update);
router.patch('/:id', User.update);
router.delete('/:id', User.destroy);

export default router;
