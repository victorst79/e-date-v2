module.exports = function(io) {
  io.on('connection', function(socket) {
    socket.on('message', function(message) {
      console.log.log('info',message.value);

      socket.emit('ditConsumer',message.value);
      console.log('from console',message.value);
    });
  });
};
