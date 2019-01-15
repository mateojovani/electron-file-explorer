const deferer = require('deferred')
const FileExplorer = require('./file-explorer.js')
const os = require('os')

class ReactSocket {
    constructor(ipcMain, webContents) {
        this._ipcMain = ipcMain
        this._webContents = webContents
        ipcMain.on('seek', this.handleSeek.bind(this))
    }

    handleSeek(event, data) {
        switch(data.resource) {
            case 'usr':
                this.getUsr(data)
                break
            case 'dirs':
                this.getDir(data)
                break
            default:
                break
        }
    }

    sendData(to, key, data) {
        this._webContents.send(`${key}-${to}`, data)
    }

    getUsr(data) {
        let username = os.userInfo().username
        let userDir = os.type() == 'Linux' ?  `/home/${username}/`: `C:\\Users\\${username}\\`
        this.sendData(data.id, 'usr', userDir)
    }

    getDir(data) {
        let fileExplorer = new FileExplorer(data.path || __dirname)
        fileExplorer.read()
            .then(dir => this.sendData(data.id, 'dirs', dir))
    }
}

module.exports = ReactSocket