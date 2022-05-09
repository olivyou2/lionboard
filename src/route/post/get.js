const { Router } = require('express');
const createHttpError = require('http-errors');
const { default: errors } = require('../../errors/error');
const { findPost, findAllPost } = require('../../service/post.service');

const router = Router();
router.get('/:id', ({ params: { id } }, res) => {
  if (!id) {
    throw new createHttpError.BadRequest(errors.PARAM_MUST_CONTAIN_ID);
  }

  const post = findPost(parseInt(id, 10));
  res.status(200).json(post);
});

router.get('/', (req, res) => {
  const posts = findAllPost();
  res.status(200).json(posts);
});

export default router;
