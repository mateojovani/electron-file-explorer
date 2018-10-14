const deferer = require('deferred')

class ElectronSocket {
    constructor(renderer) {
        this._renderer = renderer
    }

    get(what) {
        let d = deferer()

        this._renderer.on(what.resource, (event, data) => {
            d.resolve(data)
        })

        this._renderer.send('seek', what)
        setTimeout(() => d.reject(), 15000)

        return d.promise
    }
}

export default ElectronSocket