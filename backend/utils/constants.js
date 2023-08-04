const { NODE_ENV, SECRET_SIGNING_KEY } = process.env;
// Секретный ключ для разработки и отладки приложения:
const SECRET_KEY_DEV = 'dev-secret-key';
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

module.exports = {
  URL_REGEX,
  NODE_ENV,
  SECRET_SIGNING_KEY,
  SECRET_KEY_DEV,
};
