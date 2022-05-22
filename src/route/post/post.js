import { GetUserById } from '../../service/user.service';

const { Router } = require('express');
const { createPost } = require('../../service/post.service');

const router = Router();
router.post('/', (req, res) => {
  const userId = req.headers['X-User-Id'];

  if (!userId) {
    return res.json({
      error: 'X-User-Id header is not included',
    });
  }

  const { content } = req.body;

  if (!content) {
    return res.json({
      error: 'req.body.content is not included',
    });
  }

  const author = GetUserById(userId).id;

  const post = createPost({
    author,
    content,
  });

  return res.status(200).json({ data: { post: { id: post.id } } });
});

export default router;
