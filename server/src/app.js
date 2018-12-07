const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.get('/status', (req, res) => {
  res.send({
    message: 'dział'
  });
});
app.listen(process.env.PORT || 8081, () =>
  console.log('Express server running')
);
