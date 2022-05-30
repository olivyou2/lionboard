import { Router } from 'express';
import postRoute from './post';
import authRoute from "./auth";

const router = Router();

router.use('/auth', authRoute);
router.use('/posts', postRoute);

export default router;
