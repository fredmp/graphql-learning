import React from 'react';
import { graphql } from 'react-apollo';

import addLyricToSongMutation from '../queries/addLyricToSong';
import findSong from '../queries/findSong';

class LyricCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  onSubmit(event) {
    event.preventDefault();
    if (!this.state.content) return;
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}

export default graphql(addLyricToSongMutation)(LyricCreate);
