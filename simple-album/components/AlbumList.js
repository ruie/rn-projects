'use strict';

import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetails from './AlbumDetails';

class AlbumList extends React.Component {

  state = {
    albums: []
  };

  componentWillMount() {
    let url = 'https://rallycoding.herokuapp.com/api/music_albums';
    axios.get(url)
      .then(output => this.setState({albums: output.data}));
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
