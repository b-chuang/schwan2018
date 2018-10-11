import React, { Component } from 'react';
/* import logoReact from './logo.svg'; */
import './App.css';
import NavBar from './Components/NavBar';
import Album from './Components/Album';
import Pricing from './Components/Pricing';
import Stepper from './Components/Stepper';
/* import Title from './Components/Title'; */


class App extends Component {
  constructor() {
    console.log("constructor was called");
    super();
    this.state = {
      pageOne: '',
      pageTwo: '',
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
        this.setState({ pageOne: data })
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
        this.setState({ pageTwo : data })
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
    /* console.log("what is state", this.state); */

    
    return <div className="App">
        <NavBar />
          <header className="App-header">
            <h1 align="center" className="campHeader">Campaign</h1>
            {/* <img src={this.state.pageOne.logo} alt="schwan company logo of a swan"
            className="swanLogo" /> */}
          <Stepper />
            <img 
            src="https://schwans-prod.imgix.net/images/campaigns/photos/000/041/287/width_800/1536238305DSC02778.JPG?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=300" />
          
          </header>


        <Album />
        <Pricing />

        <div className="teamCampagin">

         {/*  <div className="teamCampaign__Image">
          
            {this.state.pageOne.campaigns.map((campaign) => {
              return (
                <div>
                  <img src={campaign.image} />
                </div>
                )
              })
            }
          </div> */}

          <div className="teamCampaign__Goal">
          </div>


        </div>




      </div>

  }
};


export default App;
