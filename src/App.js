import React, { Component } from 'react';
/* import logoReact from './logo.svg'; */
import './App.css';


class App extends Component {
  constructor() {
    console.log("constructor was called");
    super();
    this.state = {
      campaigns: '',
      categories: '',
      error: null
    };
  }

  //BASE FETCH
  getCampaign() {
    return fetch("https://s3.amazonaws.com/flipgive-developer-test/base.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.campaigns[0]);
        console.log(data);
       /*  this.setState({ 'campaigns': data.campaigns[0]}) */
        this.setState(data)
      })

      .catch(error => {
        console.log("error occured while fetching entries");
        console.log(error); // Do something for an error here
      });
  }

  //PAGE2 CATEGORIES FETCH
  getCategory() {
    return fetch("https://s3.amazonaws.com/flipgive-developer-test/page2.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState(data)
      })

      .catch(error => {
        console.log("error occured while fetching entries");
        console.log(error); // Do something for an error here
      });
  }

  componentDidMount() {
    this.getCampaign();
    this.getCategory();
    console.log("component did mount was called");
  }

  render() {

    const camps = this.state.campaigns;
    return <div className="App">
        <header className="App-header">
          <h1>Hello Test</h1>
           <img src={this.state.logo} alt="schwan company logo of a swan" />
        </header>

        <div className="App">
          {Object.keys(camps).map((key) => (
            <span>{key}</span>
          ))}
        </div>


        



      </div>;
  }
};


export default App;
