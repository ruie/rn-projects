'use strict';

import React from 'react';
import { ScrollView, FlatList, Text } from 'react-native';
import axios from 'axios';

import AlbumDetails from './AlbumDetails';

class AlbumList extends React.Component {

  state = {
    posts: []
  };

  componentWillMount() {
    const url = 'https://rallycoding.herokuapp.com/api/music_albums';
    axios.get(url)
      .then(output => this.setState({ posts: output.data }));
  }

  renderAlbums(album) {
    console.log(album.item);
      <AlbumDetails key={album.item.title} album={album.item} />
  }

  render() {
    return (
      <FlatList
        data={this.state.posts}
        renderItem={this.renderAlbums}
      />
    )
  }
}

export default AlbumList;
