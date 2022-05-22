import { findPost, modifyPost } from '../../service/post.service';
import { GetUserById } from '../../service/user.service';

const { Router } = require('express');

const router = Router();

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const userId = req.headers['X-User-Id'];

  if (!userId) {
    return res.json({
      error: 'X-User-Id header is not included',
    });
  }

  if (!id) {
    return res.json({
      error: 'req.params.id is not included',
    });
  }

  if (!content) {
    return res.json({
      error: 'req.params.content is not included',
    });
  }

  const user = GetUserById(parseInt(userId, 10));

  const post = findPost(id);

  if (!post) {
    return res.json({
      error: 'post not exists',
    });
  }

  if (post.author !== user.id) {
    return res.json({
      error: 'Cannot modify post',
    });
  }

  const updated = modifyPost(id, content);
  return res.status(200).json({
    data: {
      id: updated.id,
    },
  });
});

export default router;
