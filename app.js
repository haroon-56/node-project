const express = require('express');
const mongoes = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const db = require('./config/db').database;

//database connection
mongoes.connect(db,{useNewUrlParser:true})
       .then(()=>{
           console.log('database connected successfully');
       })
       .catch((error)=>{
           console.log('unable to connect with the database',error);
       });

//defining the PORT
const port = process.env.port || 5000;

//initilazie cors Middleware
app.use(cors());

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