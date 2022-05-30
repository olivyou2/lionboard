const { Router } = require('express');
const { findPost, findAllPost } = require('../../service/post.service');

const router = Router();
router.get('/:id', async ({ params: { id } }, res) => {
  if (!id) {
    return res.json({
      error: 'req.body not included',
    });
  }

  const post = await findPost(parseInt(id, 10));
  if (!post) {
    return res.json({
      error: 'Post not exists',
    });
  }

  return res.status(200).json(post);
});

router.get('/', async (req, res) => {
  const posts = await findAllPost();

  res.status(200).json({
    data: posts,
  });
});

export default router;
