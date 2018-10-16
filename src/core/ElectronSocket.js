const deferer = require('deferred')

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
}

class ElectronSocket {
    constructor(renderer) {
        this._id = uuidv4()
        this._renderer = renderer
    }

    get(what) {
        let d = deferer()
        what['id'] = this._id

        this._renderer.on(`${what.resource}-${this._id}`, (event, data) => {
            d.resolve(data)
        })

        this._renderer.send('seek', what)
        setTimeout(() => d.reject(), 15000)

        return d.promise
    }
}

export default ElectronSocket