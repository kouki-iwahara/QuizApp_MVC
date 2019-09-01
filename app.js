const express = require('express');
const indexRouter = require('./routes/index')
const quizApiRouter = require('./routes/api')

const app = express();
app.use('/', indexRouter);
app.use('/api', quizApiRouter)
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('start server');
});