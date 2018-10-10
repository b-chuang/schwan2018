import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Resources/pageOne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Hello</h1>
          <pageOne />
          console.log(pageOne)
          
        </header>
      </div>
    );
  }
}

export default App;
