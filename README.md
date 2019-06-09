# Phaser template
TypeScript + Webpack with fullscreen button, link button and preloader.

## What does it do:
* TypeScript with Phaser 3.17.0
* Custom Phaser builds to reduce the final file size
* Terser for compression
* ESLint to help keep this clean
* WebPack for development
* VSCode setup file for debugging (Requires "Debugger for Firefox" - You can delete .vscode if you do not use it)
* Two buttons ready to be added directly to the game: Fullscreen & Link

### To start:
```
    npm install
```

### To develop:
```
    npm start
```

* At http://localhost:8080/
* Automatic rebuild / refresh
* F5 to debug (VS Code)

### To reduce the filesize:
* Go to phaser-build-setup.js
* Comment out modules you do not need

Development build is using the full Phaser version taken from NPM.

### To build production:
```
    npm run build
```
If you need to iterate on proudction build, run `npm run buildprouction`. It will skip the custom build of Phaser.


Then upload index.html + /dist to your webserver.


