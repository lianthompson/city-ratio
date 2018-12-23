import React, { Component } from 'react';
import { Search } from './components/Search';
import { Navbar } from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Navbar/>
        <Search/>
      </div>
    );
  }
}

export default App;
