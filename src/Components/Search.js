import React, { Component } from 'react';
import '../css/Search.css';

export default class Search extends Component {
  constructor() {
    super()

    this.searchInput = (event) => {
      let searchString = event.target.value;
      this.props.search(searchString)
    }
  }

  render() {
    return(
      <div className='search-container'>
        <img src="assets/headcount-logo.svg" />
        <input placeholder="search"
               onChange={this.searchInput}
        />
      </div>
    )
  }
}
