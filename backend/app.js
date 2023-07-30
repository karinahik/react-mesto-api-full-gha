<<<<<<< HEAD
// подключаем dotenv, чтобы секретный
// ключ из файла .env работал
require('dotenv').config();
=======
// подключаем dotenv config(), чтобы секретный
// ключ из файла .env работал
require('dotenv').config();

>>>>>>> 833141239074abf89643af3ab780df43b9160b12
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const limiter = require('./middlewares/rateLimiter');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const routeSignup = require('./routes/signup');
const routeSignin = require('./routes/signin');

const auth = require('./middlewares/auth');

const routeUsers = require('./routes/users');
const routeCards = require('./routes/cards');

const NotFoundError = require('./errors/NotFoundError');
const errorHandler = require('./middlewares/errorHandler');

const URL = 'mongodb://127.0.0.1:27017/mestodb';
const { PORT = 3000 } = process.env;

mongoose.set('strictQuery', true);

mongoose
  .connect(URL)
  .then(() => {
    console.log('БД подключена');
  })
  .catch(() => {
    console.log('Не удалось подключиться к БД');
  });

const app = express();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(cors);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(limiter);

app.use('/', routeSignup);
app.use('/', routeSignin);

app.use(auth);

<<<<<<< HEAD
=======
app.use(errorLogger);

>>>>>>> 833141239074abf89643af3ab780df43b9160b12
app.use('/users', routeUsers);
app.use('/cards', routeCards);

app.use((req, res, next) => next(new NotFoundError('Страницы по запрошенному URL не существует')));
<<<<<<< HEAD

app.use(errorLogger);
=======
>>>>>>> 833141239074abf89643af3ab780df43b9160b12
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
