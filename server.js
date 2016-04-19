import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();

const server = http.createServer(app);

app.use(express.static('./dist'));

const io = new socketio(server);

io.on('connection', function(socket){
  socket.on('message', function(data){
    socket.broadcast.emit('new message', data);
  })
});

server.listen(4000);

