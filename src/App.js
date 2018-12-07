import React, { Component } from 'react';
import logo from './logo.svg';
import { Search } from './components/Search';
// import { Map } from './components/Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <Search/>
        {/* <Map/> */}
      </div>
    );
  }
}

export default App;
