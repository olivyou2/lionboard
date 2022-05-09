import { Router } from 'express';

import deleteRoute from './delete';
import getRoute from './get';
import postRoute from './post';
import putRoute from './put';

const router = Router();

router.use(getRoute);
router.use(postRoute);
router.use(putRoute);
router.use(deleteRoute);

export default router;
