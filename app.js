const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
// const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

connectDB();

//defining the PORT
const port = process.env.port || 8080;

//initilazie cors Middleware
// app.use(cors());

//initilazie BodyParser Middleware
app.use(bodyParser.json());

//initilazie Public Directory

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public/index.html'));
// });

const userRoutes = require('./routes/apis/user');

app.use('/api/users',userRoutes);

app.listen(port,()=>{
    console.log('server start on port',port)
});