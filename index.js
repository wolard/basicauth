const http = require('http');
const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));


const server = http.createServer(app);

server.listen(3001,'localhost',()=>{
    console.log("Server is live at localhost:3001");
});