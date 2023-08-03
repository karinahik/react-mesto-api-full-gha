const jwt = require('jsonwebtoken');

const { NODE_KEY } = require('../utils/constants');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const bearer = 'Bearer ';
  // const errorMsg = 'Неправильные почта или пароль';

  if (!authorization || !authorization.startsWith(bearer)) {
    return next(new UnauthorizedError('Необходимо авторизоваться'));
  }

  const token = authorization.replace(bearer, '');

  let payload;

  try {
    payload = jwt.verify(token, NODE_KEY);
  } catch (err) {
    return next(new UnauthorizedError('Необходимо авторизоваться'));
  }

  req.user = payload;

  return next();
};
