import React, { Component } from 'react';
import SimpleStorageContract from '../build/contracts/SimpleStorage.json';
import getWeb3 from './utils/getWeb3';
import $ from 'jquery';

import './css/oswald.css';
import './css/open-sans.css';
import './css/pure-min.css';
import ShoeTemplate from './ShoeTemplate.js';
import data from './Shoes.json';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null ,
      shoes: null,
      shoeData: data
    }

    console.log(this.state.shoeData);
  }

  createShoePost(shoe) {


    return <ShoeTemplate 
              brand = {shoe.brand}
              type = {shoe.type}
              size = {shoe.size}
              id = {shoe.id}
              key = {shoe.id}
     />
  }

  createShoePosts() {
    return(
        <div className = "container-fluid">
            <div className = "row">
              {this.state.shoeData.map(this.createShoePost)}
            </div>
        </div>
    ); 
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })  
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */
  }

  render() {

    var style = {
      backgroundColor: 'grey',
      width: '100%',
      height: '100%'
    };

    return ( 
      <div style = {style}>
        {this.createShoePosts()}
      </div>
    );
  }
}

export default App
