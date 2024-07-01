#!/usr/bin/env node

const { execSync } = require('child_process');
const [node, path, action] = process.argv;
if (action === 'pm2') {
    execSync(`pm2 start --name wakemeup ${path}`, { stdio: 'inherit' });
    process.exit(1);
}

console.log('**** Running wakemeup.js ****');

const keySender = require("node-key-sender");
const winlock = require('./winlock.node');


const interval = setInterval(() => {
    const isLocked = winlock.isLocked();
    if (isLocked) {
        console.log("**** Windows is currently locked ****");
    } else {
        keySender.sendKey('scroll_lock');
        console.log('**** Scroll lock button pressed ****');
    }
}, 150 * 1000);


const turnOffDisplay = require("turn-off-display");
const keyListener = new (require("node-global-key-listener")).GlobalKeyboardListener();

keyListener.addListener(function (e, down) {
    const meta = down['LEFT META'] || down['RIGHT META'];
    const alt = down['LEFT ALT'] || down['RIGHT ALT'];
    if (e.name === 'O' && e.state === 'UP' && meta && alt) {
        console.log('**** Turning off display ****');
        turnOffDisplay();
    }
});