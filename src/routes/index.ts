import express, { Router } from 'express';
import userRouter from '../features/users/userRoutes';

const router: Router = express.Router();

router.use('/users', userRouter);

export default router;
