const deferer = require('deferred')
const FileExplorer = require('./file-explorer.js')

class ReactSocket {
    constructor(ipcMain, webContents) {
        this._ipcMain = ipcMain
        this._webContents = webContents
        ipcMain.on('seek', this.handleSeek.bind(this))
    }

    handleSeek(event, data) {
        switch(data.resource) {
            case 'dirs':
                this.getDir(data.path || __dirname)
                break
            default:
                break
        }
    }

    getDir(path) {
        let fileExplorer = new FileExplorer(path)
        fileExplorer.read()
            .then(dir => this._webContents.send('dirs', dir))
    }
}

module.exports = ReactSocket