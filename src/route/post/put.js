import { findPost, modifyPost } from '../../service/post.service';
import { GetUserById } from '../../service/user.service';

const { Router } = require('express');

const router = Router();

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const userId = req.headers['x-user-id'];

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

  const user = await GetUserById(parseInt(userId, 10));

  const post = await findPost(id);

  if (!post) {
    return res.json({
      error: 'post not exists',
    });
  }

  if (post.author !== user.id.toString()) {
    return res.json({
      error: 'Cannot modify post',
    });
  }

  const updated = await modifyPost(id, content);
  return res.status(200).json({
    data: {
      id
    },
  });
});

export default router;
