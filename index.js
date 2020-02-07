const express = require('express');
const morgan = require('morgan');

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(require('./routes'));

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${process.env.PORT || PORT}`);
});
