const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { URL_REGEX } = require('../utils/constants');
const { registrationUser } = require('../controllers/users');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
<<<<<<< HEAD
    password: Joi.string().required(),
=======
    password: Joi.string().required().min(6),
>>>>>>> 833141239074abf89643af3ab780df43b9160b12
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi
      .string()
      .pattern(URL_REGEX),
  }),
}), registrationUser);

module.exports = router;
