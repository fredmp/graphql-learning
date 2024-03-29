import React from 'react';
import { graphql } from 'react-apollo';

import likeLyric from '../queries/likeLyric';

class LyricList extends React.Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i
              className="material-icons blue-text"
              onClick={() => this.onLike(id, likes)}>thumb_up</i>
            {likes}
          </div>
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

export default graphql(likeLyric)(LyricList);