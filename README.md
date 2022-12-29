<div style="text-align:center;" align="center">
    <h1>Stay Awake</h1>
    <p>Tool to keep windows machine awake and hotkey to turn monitor off.</p>
    <p>
        <a href="https://github.com/sheriffMoose/stay-awake/actions/workflows/release.yml">
            <img src="https://img.shields.io/github/actions/workflow/status/sheriffMoose/stay-awake/release.yml?logo=github&label=release"/>
        </a>
        <a href="https://github.com/sheriffMoose/stay-awake/blob/main/LICENSE">
            <img src="https://img.shields.io/github/license/sheriffMoose/stay-awake?logo=github"/>
        </a>
        <a href="https://npmjs.org/package/@sheriffmoose/stay-awake">
            <img src="https://img.shields.io/npm/v/@sheriffmoose/stay-awake?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label="/>
        </a>
    </p>
    <p>
        <a href="https://npmjs.org/package/@sheriffmoose/stay-awake">
            <img src="https://nodei.co/npm/@sheriffmoose/stay-awake.png"/>
        </a>
    </p>
</div>

<h2>Table of Contents</h2>

- [Installation](#installation)
  - [PM2](#pm2)
  - [How it works](#how-it-works)
  - [Monitor Off Hotkey](#monitor-off-hotkey)



## Installation
Simply run
```
npm i -g @sheriffmoose/stay-awake
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
