const express = require('express');
const bodyparser = require('body-parser');
const movieRouter = require('./routes/movies');
const userRouter = require('./routes/users');
const app = express();

app.use('/movies', movieRouter);
app.use('/users', userRouter);
app.listen(3000, () => console.log('Listening in port 3000'));
