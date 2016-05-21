const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '/../public')));

app.listen('9000', () => {
  console.log('Live, over 9000!');
});
