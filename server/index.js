const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const movieRouter = require('./routes/movies');
const userRouter = require('./routes/users');
const registerRouter = require('./routes/register');
const security = require('./middlewares/security');
const securityRouter = require('./routes/security');
const eventRouter = require('./routes/events');
const subscriptionRouter = require('./routes/subscription');
const app = express();

app.use(cors());

app.use(bodyparser.json());
app.use('/register', registerRouter);
app.use(security.verifyToken);
app.use('/', securityRouter);

app.use('/movies', movieRouter);
app.use('/users', userRouter);
app.use('/events', eventRouter);
app.use('/subscription', subscriptionRouter);

app.listen(3000, () => console.log('Listening in port 3000'));
