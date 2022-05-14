const { Router } = require('express');
const { CreateUser, GetUser } = require('../../../service/user.service');

const router = Router();
router.post('/login', ({ body: { email, password } }, res) => {
  if (!email) {
    return res.json({
      error: 'body.email is not included',
    });
  }

  if (!password) {
    return res.json({
      error: 'body.password is not included',
    });
  }

  if (GetUser({ email, password })) {
    return res.json({
      error: 'User already exists',
    });
  }

  const user = CreateUser({ email, password });

  return res.status(200).json({
    data: {
      user: {
        id: user.id,
      },
    },
  });
});

export default router;
