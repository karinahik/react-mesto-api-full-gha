require('dotenv').config();

const { NODE_ENV, SECRET_SIGNING_KEY } = process.env;

const { NODE_KEY } = NODE_ENV === 'production'
  ? SECRET_SIGNING_KEY
  : '2a9a052ca759676414673ac1fc62414d068da9761a7f7593b3798d910d479279';

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

module.exports = {
  URL_REGEX,
  NODE_KEY,
};
