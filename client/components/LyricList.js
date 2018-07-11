import React from 'react';

class LyricList extends React.Component {
  onLike(id) {

  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i
            className="material-icons blue-text"
            onClick={() => this.onLike(id)}>thumb_up</i>
        </li>
      );
    })
  }
  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default LyricList;