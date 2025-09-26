const express = require('express');
const connectDb = require('./config/db');
const userAuth = require('./routes/userAuth')

require('dotenv').config();
const app = express();
const PORT = process.env.PORT ;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
app.use(express.json())
app.use('/api/auth',userAuth)
connectDb();
