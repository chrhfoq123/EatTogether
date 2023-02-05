const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

const io = require('socket.io')(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

io.on('connection', (socket) => {
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('새로운 클라이언트 접속', ip, socket.id, req.ip);
    socket.on('disconnect', () => {
        console.log('클라이언트 접속 해제', ip, socket.id);
        clearInterval(socket.interval);
    });
    socket.on('reply', (data) => {
        console.log(data);
    });
    socket.interval = setInterval(() => {
        socket.emit('msg', '여기는 노드');
    }, 3000);
});

app.get('/', (req, res, next) => {
    res.json('hi');
});

server.listen(PORT, () => {
    console.log(`${PORT}번 포트 열림`);
});