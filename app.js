const express = require('express');
const app = express();

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'))
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('start server');
});