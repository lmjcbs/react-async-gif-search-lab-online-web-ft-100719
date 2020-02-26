import React, { Component } from 'react';

class GifList extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.gifs.map(gif => <img src={ gif.images.original.url } alt=""></img>)}
        </ul>
      </div>
    )
  }
}

export default GifList