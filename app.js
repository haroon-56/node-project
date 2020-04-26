const express = require('express');
const path = require('path');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

connectDB();

//defining the PORT
const port = process.env.port || 5000;

//initilazie cors Middleware
app.use(cors());

//initilazie BodyParser Middleware
app.use(express.json());

//initilazie Public Directory

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
});

const userRoutes = require('./routes/apis/user');

app.use('/api/users',userRoutes);

app.listen(port,()=>{
    console.log('server start on port',port)
});