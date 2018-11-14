var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send({ message: "ok"});
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('chat',{ id:"userid", msg: "hello" } );
});

var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('listening on *:' + port);
});
