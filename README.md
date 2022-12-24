# stay-awake
Tool to keep windows machine awake and hotkey to turn monitor off


## Installation
Simply run
```
npm i -g @sheriffMoose/stay-awake
```

Now you will be able to run
```
stay-awake
```

### PM2
If you would like to run this with `pm2` to run indefinitely, simply run `stay-awake pm2` which will use your `pm2` instance to start `stay-awake` in the background.


### How it works
This tool simply mimics a ScrollLock button press every 150 seconds. This way your machine will stay awake even if you are away.

### Monitor Off Hotkey
To turn off monitor, use the hotkey Window(Meta) + Alt + O.
