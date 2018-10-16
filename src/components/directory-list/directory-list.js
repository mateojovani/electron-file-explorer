import React, { Component } from 'react'
import ElectronSocket from '../../core/ElectronSocket'
import './directory-list.css'
import { List, Segment, Icon } from 'semantic-ui-react'
import FileIcons from '../../core/file-icons'

const Dir = props => {
    return (
        <a onClick={ props.handleClick.bind(this) } href='#' className='list-item'>
            <List.Item>
                <Icon name={ props.icon } /> { props.dirname }
            </List.Item>
        </a>
    )
}

class DirectoryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dirs: null,
            homePath: '/'
        }

        this.fetchDirs()
    }

    fetchDirs() {
        let electronSock = new ElectronSocket(window.ipcRenderer)
        electronSock
            .get({resource: 'usr'})
            .then((usr) => {
                this.setState({homePath: `/home/${usr}/`})
                return electronSock.get({resource: 'dirs', path: `/home/${usr}/`})
            })
            .then((dirs) => {
                dirs = dirs
                    .filter(dir => dir[0] !== '.')

                this.setState({
                    'dirs': dirs
                })
            })
    }

    render() {
        return (
            <Segment vertical className='directory-list'>
                <List>
                    {
                        this.state.dirs &&
                        this.state.dirs.map((dir, index) => {
                            return <Dir handleClick={this.props.handleDirClick(this.state.homePath + dir)} key={index} icon={FileIcons.find(dir)} dirname={dir}/>
                        })
                    }
                </List>
            </Segment>
        )
    }
}

export default DirectoryList
