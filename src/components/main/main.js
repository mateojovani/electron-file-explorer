import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
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
    }

    handleDirClick(dir) {
        return () => {
            this.setState({
                fileExplorer: {
                    currentpath: dir
                }
            })
        }
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <DirectoryList handleDirClick={this.handleDirClick}/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <FileExplorer view={this.state.fileExplorer.currentpath}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Main
