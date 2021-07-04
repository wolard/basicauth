const http = require('http');
const express = require('express');
const morgan = require('morgan');
const auth = require('./auth');
const app = express();

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.end("Welcome to your express app!")
})
app.use(auth)
app.get('/secret',(req,res)=>{
    res.statusCode=200;
    res.end("******")
});
const server = http.createServer(app);

server.listen(3001,'localhost',()=>{
    console.log("Server is live at localhost:3001");
});