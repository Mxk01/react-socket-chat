const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require('cors');

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});






app.use(cors());
/*
mongoose.connect(URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
 .then(()=>console.log('Connecting to mongoose'))
 .catch((e)=>console.log(e))
*/
io.on('connection', (socket) => {

    // socket.broadcast.emit('connect', `Someone connected!`)


    // socket.emit('connected', 'Welcome to the chat!')

    // socket.on("disconnect", () => {
    //     console.log("User Disconnected", socket.id);
    // });
    // when receiving message from frontend
    socket.on('send-message', (message) => {
        // send it back
        socket.broadcast.emit('msg', message);
    })
})


server.listen(5000, () => {
    console.log('listening on *:5000');
});