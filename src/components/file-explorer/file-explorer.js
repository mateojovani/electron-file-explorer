import React, { Component } from 'react';
import ElectronSocket from '../../core/ElectronSocket'

const Dir = props => {
    console.log(props)
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

        let electronSock = new ElectronSocket(window.ipcRenderer)
        electronSock.get('dirs').then((dirs) => {
            this.setState({
                'dirs': dirs
            })
        })
    }
    render() {
        return (
            <div>
                { this.state.dirs && this.state.dirs.map((dir, index) => <Dir key={index} dirname={dir}/>)}
            </div>
        );
    }
}

export default FileExplorer
