const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { loginUser } = require('../controllers/users');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
<<<<<<< HEAD
    password: Joi.string().required(),
=======
    password: Joi.string().required().min(6),
>>>>>>> 833141239074abf89643af3ab780df43b9160b12
  }),
}), loginUser);

module.exports = router;
