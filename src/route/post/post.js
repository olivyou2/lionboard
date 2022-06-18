import { auth } from "../../middleware/auth";
import { GetUserById } from "../../service/user.service";

const { Router } = require("express");
const { createPost } = require("../../service/post.service");

const router = Router();
router.post("/", auth, async (req, res) => {
  const userId = req.headers["x-user-id"];

  if (!userId) {
    return res.json({
      error: "X-User-Id header is not included",
    });
  }

  const { content } = req.body;

  if (!content) {
    return res.json({
      error: "req.body.content is not included",
    });
  }

  const post = await createPost({
    author: userId,
    content,
  });

  return res.status(200).json({ data: { post: { id: post.id } } });
});

export default router;
