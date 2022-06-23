import { Router } from "express";

import deleteRoute from "./delete";
import getRoute from "./get";
import postRoute from "./post";
import putRoute from "./put";

import cors from "cors";

const postRouter = Router();
const router = Router();

router.use(getRoute);
router.use(postRoute);
router.use(putRoute);
router.use(deleteRoute);

postRouter.use(
  cors({
    origin: ["http://localhost:80"],
  }),
  router
);

export default router;
