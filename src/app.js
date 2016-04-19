import io from 'socket.io-client';

var socket = io();

var chatform = document.querySelector("#chatform");
var chatarea = document.querySelector("#chatarea");
var chatfield = document.querySelector("#chatfield");

chatform.addEventListener('submit', function(e){
  e.preventDefault();

  var val = chatfield.value;
  chatarea.innerHTML += `<p>${val}</p>`;
  socket.emit('message', {msg: val});

  chatfield.value = "";
});

socket.on('new message', function(data){
  chatarea.innerHTML += `<p>${data.msg}</p>`;
})