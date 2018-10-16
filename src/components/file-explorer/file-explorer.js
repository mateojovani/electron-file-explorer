import React, { Component } from 'react'
import ElectronSocket from '../../core/ElectronSocket'

const Dir = props => {
    return (
        <div id={ props.key }>
            { props.dirname }
        </div>
    )
}

class FileExplorer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'dirs': null
        }

        this.getDirs()
    }

    getDirs() {
        let electronSock = new ElectronSocket(window.ipcRenderer)
        electronSock.get({resource: 'dirs', path: this.props.view}).then((dirs) => {
            this.setState({
                'dirs': dirs
            })
        })
    }

    render() {
        this.getDirs()

        return (
            <div>
                { this.state.dirs && this.state.dirs.map((dir, index) => <Dir key={index} dirname={dir}/>)}
            </div>
        )
    }
}

export default FileExplorer
