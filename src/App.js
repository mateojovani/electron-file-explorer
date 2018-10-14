import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileExplorer from './components/file-explorer/file-explorer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FileExplorer />
        </header>
      </div>
    );
  }
}

export default App;
