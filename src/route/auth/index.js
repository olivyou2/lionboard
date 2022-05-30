const { Router } = require("express");

import loginRoute from "./login"
import registerRoute from "./register"

const router = Router();
router.use("/login", loginRoute);
router.use("/register", registerRoute);

export default router;