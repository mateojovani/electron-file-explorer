import React, { Component } from 'react'
import ElectronSocket from '../../core/ElectronSocket'
import { Segment, Icon, Card } from 'semantic-ui-react'
import FileIcons from '../../core/file-icons'
import '../../font/flaticon.css'
import './file-explorer.css'

const Dir = props => {
    return (
        <Card>
            { props.isDir ? <Icon onDoubleClick={ props.handleDirClick } className="folder-icon" name='folder' /> :
                <span className={ "file-icon " + FileIcons.getFileIcon(props.dirname) }></span> }
            <Card.Content>
                { props.dirname }
            </Card.Content>
        </Card>
    )
}

class FileExplorer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'dirs': null
        }

        this.electronSock = new ElectronSocket(window.ipcRenderer)
        this.getDirs()
    }

    displayDirs(dirs) {
        //sort folders first
        dirs.sort((a, b) => {
            return Number(b.isDir) - Number(a.isDir)
        })

        this.setState({
            'dirs': dirs
        })
    }

    getDirs() {
        this.electronSock.get({resource: 'dirs', path: this.props.view}).then((dirs) => {
            this.displayDirs(dirs)
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.view !== this.props.view){
            this.props = nextProps
            this.getDirs()
        }
    }

    render() {
        return (
            <Segment vertical className='file-explorer'>
                <Card.Group>
                    {
                        this.state.dirs &&
                        this.state.dirs.map((dir, index) => {
                            return <Dir currentPath={this.props.view} handleDirClick={this.props.handleDirClick(this.props.view + dir.dirname + "/")} key={index} isDir={dir.isDir} icon={FileIcons.find(dir.dirname)} dirname={dir.dirname}/>
                        })
                    }
                </Card.Group>
            </Segment>
        )
    }
}

export default FileExplorer
