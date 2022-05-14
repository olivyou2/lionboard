import { Router } from 'express';
import route from './post';

const router = Router();

router.use('/posts', route);

export default router;
