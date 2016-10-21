# jsdc-tw-2016-webdriverio

**init project**

```
mkdir jsdc-tw-2016-webdriverio
cd jsdc-tw-2016-webdriverio
npm init -y
npm i webdriverio -D
```

**generate config**

```
./node_modules/webdriverio/bin/wdio
```

**setting up npm test**

`vi package.json`

```
"test": "wdio wdio.conf.js"
```
