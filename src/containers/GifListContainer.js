import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList';

class GifListContainer extends Component {
  state= {
    API: 'https://api.giphy.com/v1/gifs/search?q=',
    API_KEY: '&api_key=dc6zaTOxFJmzC&rating=g',
    searchTerm: '',
    gifs: []
  };

  componentDidMount() {
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleClick = () => {
    fetch(`${this.state.API}${this.state.searchTerm}${this.state.API_KEY}`)
    .then(response => response.json())
    .then(gifObjs => this.setState({gifs: gifObjs.data}))
  }

  render() {
    return(
      <div>
        <GifSearch handleChange={ this.handleChange } handleClick={ this.handleClick }></GifSearch>
        <GifList gifs={ this.state.gifs }></GifList>
      </div>
    )
  }
}

export default GifListContainer