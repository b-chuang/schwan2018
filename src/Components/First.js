import React, { Component } from 'react';


export default class Test extends Component {
  constructor(props) {
    // Pass props to the parent component
    super(props);
    // Set initial state
    this.state = {

      post: []
    };
  }
  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {

    fetch('https://swapi.co/api/people/1')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          post: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
      <h1> ...loading </h1>
  }
}

export default First;