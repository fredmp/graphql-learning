import React from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

import query from '../queries/fetchSongs';
import createSongMutation from '../queries/createSong';

class SongCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();
    if (!this.state.title) return;
    this.props.mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/'));
  }

  render() {
    return (
      <div>
        <br />
        <div>
          <Link
            to="/"
            className="btn-floating btn-large left">
            <i className="material-icons blue-grey">arrow_back</i>
          </Link>
        </div>
        <br />
        <br />
        <div>
          <h3>New Song</h3>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Title</label>
            <input
              onChange={event => this.setState({ title: event.target.value })}
              value={this.state.title}
            />
            <button action="submit" className="btn-large right blue">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default graphql(createSongMutation)(SongCreate);
