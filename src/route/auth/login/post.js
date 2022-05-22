const { Router } = require('express');
const { GetUser } = require('../../../service/user.service');

const router = Router();
router.post('/', async ({ body: { email, password } }, res) => {
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

  const user = await GetUser(email);

  if (!user || (user.password !== password)) {
    return res.json({
      error: 'User not exists',
    });
  }

  return res.status(200).json({
    data: {
      user: {
        id: user.id,
      },
    },
  });
});

export default router;
