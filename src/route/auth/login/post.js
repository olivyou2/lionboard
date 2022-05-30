import { CreateToken } from "../../../service/jwt.service";

const { Router } = require("express");
const { GetUser } = require("../../../service/user.service");

const router = Router();
router.post("/", async ({ body: { email, password } }, res) => {
  if (!email) {
    return res.json({
      error: "body.email is not included",
    });
  }

  if (!password) {
    return res.json({
      error: "body.password is not included",
    });
  }

  const user = await GetUser(email);

  if (!user || user.password !== password) {
    return res.json({
      error: "User not exists",
    });
  }

  const token = CreateToken(user.id);

  return res.status(200).json({
    data: {
      token,
    },
  });
});

export default router;
