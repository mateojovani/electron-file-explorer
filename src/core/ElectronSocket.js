const deferer = require('deferred')

class ElectronSocket {
    constructor(renderer) {
        this._renderer = renderer
    }

    get(resource) {
        let d = deferer()

        this._renderer.on(resource, (event, data) => {
            d.resolve(data)
        })

        this._renderer.send('seek', resource)
        setTimeout(() => d.reject(), 15000)

        return d.promise
    }
}

export default ElectronSocket