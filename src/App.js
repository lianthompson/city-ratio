import React, { Component } from 'react';
import { Search } from './components/Search';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <header className="App-header">
            </header>
            <Navbar/>
            <Search/>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
