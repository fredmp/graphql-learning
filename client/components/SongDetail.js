import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import findSong from '../queries/findSong';
import lyricCreate from '../components/LyricCreate';
import LyricCreate from '../components/LyricCreate';

class SongDetail extends React.Component {
  render() {
    const { song } = this.props.data;
    if (!song) { return <div>Loading...</div>; }
    return (
      <div>
        <Link
          to="/"
          className="btn-floating btn-large left">
          <i className="material-icons blue-grey">arrow_back</i>
        </Link>
        <br />
        <br />
        <h3>{song.title}</h3>
        <LyricCreate></LyricCreate>
      </div>
    );
  }
}

export default graphql(
  findSong,
  {
    options: (props) => {
      return {
        variables: { id: props.params.id }
      }
    }
  }
)(SongDetail);
