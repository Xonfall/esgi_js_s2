const express = require('express');
const bodyparser = require('body-parser');
const movieRouter = require('./routes/movies');
const userRouter = require('./routes/users');
const security = require('./middlewares/security');
const securityRouter = require('./routes/security');
const cors = require('cors');

const app = express();

app.use(cors);

app.use(bodyparser.json());
app.use(security.verifyToken);
app.use('/', securityRouter);

app.use('/movies', movieRouter);
app.use('/users', userRouter);

app.listen(3000, () => console.log('Listening in port 3000'));
