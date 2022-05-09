import createHttpError from 'http-errors';
import errors from '../../errors/error';
import { removePost } from '../../service/post.service';

const { Router } = require('express');

const router = Router();

router.delete('/:id', ({ params: { id } }, res) => {
  if (!id) {
    throw new createHttpError.BadRequest(errors.PARAM_MUST_CONTAIN_ID);
  }

  removePost(id);
  res.status(204).send();
});

export default router;
