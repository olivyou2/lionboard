const { Router } = require('express');
const createHttpError = require('http-errors');
const { default: errors } = require('../../errors/error');
const { createPost } = require('../../service/post.service');

const router = Router();
router.post('/', ({ body: { post } }, res) => {
  if (!post) {
    throw new createHttpError.BadRequest(errors.BODY_MUST_CONTAIN_POST);
  }

  createPost(post);
  res.status(200).json(post);
});

export default router;
