const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = 'mongodb://127.0.0.1:27017/users'
const mongoURL= process.env.MONGODB_URL;


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected To MongoDB Server');
})

db.on('error', () => {
    console.log('MongoDB Connection Error');
})

db.on('disconnected', () => {
    console.log('MongoDB Disconnected ');
})