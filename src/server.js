const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server); 
const config = require("./config/config");
const { connectToDataBase } = require('./utils/connectDb');
const routes = require('./routes');
const PORT = config.get("port")

io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});




app.use("api",routes)

connectToDataBase().then(()=>{
  server.listen(PORT,()=>{
    console.log(`server run on port : ${PORT}` );
  });
})
