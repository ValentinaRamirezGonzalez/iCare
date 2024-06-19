
import express from 'express'
import http from 'http'
import { Server as SocketServer } from 'socket.io'
import { PORT } from './config.js'


const app = express()
const server = http.createServer(app)
const io = new SocketServer(server,{
    cors:{
        origin:"http://localhost:3000"
    }

});

io.on('connection',socket=>{
    console.log('client conected')

    socket.on('message',(data)=>{
        socket.broadcast.emit('message',data)
    
})
})

server.listen(PORT);
console.log('server on port', PORT)
