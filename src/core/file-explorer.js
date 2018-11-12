const fs = require('fs')
const deferred = require('deferred')

class FileExplorer {
    constructor(path){
        if(path)
            this._path = path
        else this._path = __dirname
    }

    getPath() {
        return this._path
    }

    setPath(path) {
        this._path = path || __dirname
    }

    read(path) {
        let d = deferred()

        if(path)
            this._path = path
        else path = this._path

        fs.readdir(path, (err, dirs) => {
            if (err)
                d.reject(err)
            else {
                dirs = dirs.map(dir => {
                    try{
                        return fs.statSync(path + dir).isDirectory() ?
                        {
                            dirname: dir,
                            isDir: true
                        } :
                        {
                            dirname: dir,
                            isDir: false
                        }
                    }catch(err){
                        return false
                    }
                })

                d.resolve(dirs)
            }
        })

        return d.promise
    }
}

module.exports = FileExplorer