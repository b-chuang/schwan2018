import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios";

const url = "https://s3.amazonaws.com/flipgive-developer-test/base.json";


class App extends Component {
  constructor() {
    console.log('constructor was called');
    super();
  }

  componentDidMount() {//when the data arrived on the page
    //ok go ahead and get us the data
    console.log('component did mount was called');

    /* axios.get(url, {
      params: { //params same as data in jquery
        key: [],
      }
    }).then((res) => {
      this.setState({
       /*  people: res.data.operations // res.data.operations this is how to get into API object. people in operations, and sets them as state
        /* console.log(res);
      });
    }); */
    fetch("https://s3.amazonaws.com/flipgive-developer-test/base.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Work with JSON data here
        console.log(data);
      })
      .catch(err => {
        // Do something for an error here
      });


    fetch('https://s3.amazonaws.com/flipgive-developer-test/page2.json').then(response => {
      return response.json();
    }).then(data => {
      // Work with JSON data here
      console.log(data);
    }).catch(err => {
      // Do something for an error here
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello Test</h1>
        </header>
      </div>
    );
  }
};


export default App;
