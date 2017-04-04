'use strict';

import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetails from './AlbumDetails';

class AlbumList extends React.Component {

  state = {
    posts: []
  };

  componentWillMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts/10';
    axios.get(url)
      .then(output => this.setState({ posts: output.data }));
  }

  renderAlbums() {
    console.log(this.state);
    return this.state.albums.map(album =>
      <AlbumDetails key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;
