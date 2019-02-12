const mongoose = require('mongoose');

//mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@mongo/${process.env.MONGODB_DB_NAME}`);
mongoose.connect(`mongodb://mongo`, {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
    dbName: process.env.MONGODB_DB_NAME,
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', function () {throw new Error(console.log('Connection failed'))});
db.on('open', function () {console.log('Connected')});

module.exports = db;