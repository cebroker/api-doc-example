const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();

app.use(helmet({ noCache: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, cache-control'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.use((error, req, res, next) => {
  console.log(error);
  return res.status(500).send({
    error: {
      type: 'UnexpectedError',
      name: error.name,
      message: error.message
    }
  });
});

module.exports = app;
