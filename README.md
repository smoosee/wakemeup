<div style="text-align:center;" align="center">
    <h1>Stay Awake</h1>
    <p>Tool to keep windows machine awake and hotkey to turn monitor off.</p>
    
[![][img.release]][link.release]
[![][img.license]][link.license]

![][img.node]
![][img.npm]
![][img.downloads]

[![][img.health]][link.snyk]

[![][img.banner]][link.npm]

</div>

[img.release]: https://img.shields.io/github/actions/workflow/status/smoosee/wakemeup/release.yml?logo=github&label=release
[img.license]: https://img.shields.io/github/license/smoosee/wakemeup?logo=github
[img.node]: https://img.shields.io/node/v/@smoosee/wakemeup?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[img.npm]: https://img.shields.io/npm/v/@smoosee/wakemeup?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=
[img.downloads]: https://img.shields.io/npm/dt/@smoosee/wakemeup?logo=docusign&logoColor=white&labelColor=purple&color=grey&label=
[img.health]: https://snyk.io/advisor/npm-package/@smoosee/wakemeup/badge.svg
[img.banner]: https://nodei.co/npm/@smoosee/wakemeup.png
[link.release]: https://github.com/smoosee/smoosee/actions/workflows/release.yml
[link.license]: https://github.com/smoosee/smoosee/blob/master/LICENSE
[link.npm]: https://npmjs.org/package/@smoosee/wakemeup
[link.snyk]: https://snyk.io/advisor/npm-package/@smoosee/wakemeup


<h2>Table of Contents</h2>

- [Installation](#installation)
  - [PM2](#pm2)
  - [How it works](#how-it-works)
  - [Monitor Off Hotkey](#monitor-off-hotkey)



## Installation
Simply run
```
npm i -g @smoosee/wakemeup
```

Now you will be able to run
```
wakemeup
```

### PM2
If you would like to run this with `pm2` to run indefinitely, simply run `wakemeup pm2` which will use your `pm2` instance to start `wakemeup` in the background.


### How it works
This tool simply mimics a ScrollLock button press every 150 seconds. This way your machine will stay awake even if you are away.

### Monitor Off Hotkey
To turn off monitor, use the hotkey Window(Meta) + Alt + O.
