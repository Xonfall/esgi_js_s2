const express = require('express');
const movieRouter = require('./routes/movies');
const app = express();


app.use('/movies', movieRouter);

app.listen(3000, () => console.log('Listening in port 3000'));