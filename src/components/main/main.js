import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import ElectronSocket from '../../core/ElectronSocket'
import DirectoryList from '../directory-list/directory-list'
import FileExplorer from '../file-explorer/file-explorer'
import 'semantic-ui-css/semantic.min.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.handleDirClick = this.handleDirClick.bind(this)
        this.state = {
            fileExplorer: {
                currentpath: '/'
            }
        }

        this.getHomeDir()
    }

    setView(path = '/') {
        this.setState({
            fileExplorer: {
                currentpath: path
            }
        })
    }

    getHomeDir() {
        let homePath = '/'
        let electronSock = new ElectronSocket(window.ipcRenderer)
        electronSock
            .get({resource: 'usr'})
            .then((usr) => {
                homePath = `/home/${usr}/`
                this.setView(homePath)
            })
    }

    handleDirClick(dir) {
        return () => this.setView(dir)
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <DirectoryList handleDirClick={this.handleDirClick}/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <FileExplorer handleDirClick={this.handleDirClick} view={this.state.fileExplorer.currentpath}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Main
