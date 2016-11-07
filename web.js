const express = require('express');
const logger = require('morgan');

const app = express();
app.use(express.static('build/public'));
app.use(logger('dev'));
app.listen(9999);
