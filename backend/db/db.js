const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected');
    } catch (err) {
        console.error('DB connection error:', err);
    }
};

module.exports = { db };
