require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/user'); 
const taskRoutes = require('./src/routes/task'); 

const app = express();
const port = process.env.PORT || 3022; 
const host = 'localhost';

app.use(cors());
app.use(express.json());

// MongoDB connection URI (from .env file)
const uri = process.env.MONGODB_URI; 

// Connect to MongoDB 
const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
};

connect();

// Routes
app.use('/api', userRoutes); 
app.use('/api', taskRoutes); 


// Start the server
const server = app.listen(port, host, () => {
    console.log(`Node server is listening on http://${host}:${port}`);
});