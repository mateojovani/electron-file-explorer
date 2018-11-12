const deferer = require('deferred')
const FileExplorer = require('./file-explorer.js')

class ReactSocket {
    constructor(ipcMain, webContents, usr) {
        this._ipcMain = ipcMain
        this._webContents = webContents
        this._usr = usr
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
        // const {dialog} = require('electron')
        // console.log(dialog.showMessageBox({message: to + " " + " " + key + " " + data}))
        this._webContents.send(`${key}-${to}`, data)
    }

    getUsr(data) {
        this.sendData(data.id, 'usr', this._usr)
    }

    getDir(data) {
        // const {dialog} = require('electron')
        // console.log(dialog.showMessageBox({message: JSON.stringify(data)}))
        let fileExplorer = new FileExplorer(data.path || __dirname)
        fileExplorer.read()
            .then(dir => {console.log(dir); return this.sendData(data.id, 'dirs', dir)})
    }
}

module.exports = ReactSocket