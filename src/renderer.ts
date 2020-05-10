// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { ipcRenderer } from 'electron';
import * as ip from 'ip';

document.getElementById('ip').innerText = `${ip.address()}:3000`;

ipcRenderer.on('cmd', (event, message) => {
    console.log(message);
})
