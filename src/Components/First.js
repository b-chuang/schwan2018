import React, { Component } from 'react';


export default class Test extends Component {
  constructor(props) {
    // Pass props to the parent component
    super(props);
    // Set initial state
    this.state = {
      // State needed
      post: []
    };
  }