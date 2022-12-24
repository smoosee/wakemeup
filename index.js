#!/usr/bin/env node

console.log('**** Running stay-awake.js ****');

const keySender = require("node-key-sender");
const lockYourWindows = require('lock-your-windows');


const interval = setInterval(() => {
    const isLocked = lockYourWindows.isLocked();
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