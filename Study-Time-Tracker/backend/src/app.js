const express = require('express');
const cors = require('cors');
const userRoutes = require('./route/user'); 
const taskRoutes = require('./route/task'); 

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes); 
app.use('/api', taskRoutes); 
module.exports = app;