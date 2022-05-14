import createHttpError from 'http-errors';
import errors from '../../errors/error';
import { modifyPost } from '../../service/post.service';

const { Router } = require('express');

const router = Router();

router.put('/:id', ({ params: { id }, body: { post } }, res) => {
  if (!id) {
    throw new createHttpError.BadRequest(errors.PARAM_MUST_CONTAIN_ID);
  }

  if (!post) {
    throw new createHttpError.BadRequest(errors.BODY_MUST_CONTAIN_POST);
  }

  const updated = modifyPost(id, post);
  res.status(200).json(updated);
});

export default router;
