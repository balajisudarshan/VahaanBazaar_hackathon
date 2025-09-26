const express = require('express');
const connectDb = require('./config/db');
const userAuth = require('./routes/userAuth');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Enable CORS for all routes
app.use(cors());

// Parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', userAuth);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect DB
connectDb();
