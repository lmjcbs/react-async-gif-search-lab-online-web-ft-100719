import React, { Component } from 'react';

class GifSearch extends Component {
  render() {
    return (
      <div>
        <h2>Enter Search Term</h2>
        <input onChange={(event) => this.props.handleChange(event) }></input>
        <button onClick={ this.props.handleClick }>Find GIFs</button>
      </div>
    )
  }
}

export default GifSearch