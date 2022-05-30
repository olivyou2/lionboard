const { Router } = require("express");
import post from "./post"

const router = Router();
router.use("/", post)

export default router;