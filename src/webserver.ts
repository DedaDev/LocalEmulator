import { BrowserWindow } from 'electron';
import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
import * as socketio from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = socketio(server);

app.use(express.static('web'));

server.listen(3000);

function webFunction(win: BrowserWindow) {
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('cmd', (msg: string) => {
            console.log('cmd0', msg);
            win.webContents.send('cmd', msg);
        });
    });

}

export default webFunction;
