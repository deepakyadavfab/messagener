const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    socket.on('newmsg', msg=>{
        console.log(msg);
        socket.broadcast.emit('newmsg', msg)
    })
});
// end of socket.io logic

module.exports = socketapi;