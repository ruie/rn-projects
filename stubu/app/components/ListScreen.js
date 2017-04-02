import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

import Post from './common/Post';

class ListScreen extends React.Component {
  constructor(props){
    super(props)
  }

  state = {
    posts: []
  }

  async componentWillMount() {
    this.setState( this.props.toProps );
    let url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url);
    this.setState({ posts: await response.json()});
  }

  renderAlbums() {
    console.log(this.state);
    return this.state.posts.map(post =>
      <Post key={post.title} post={post} />
    );
  }

  render() {
    console.log('Profile',this.state);
    return (
      <ScrollView style={styles.scroll}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }

}

const styles = {
  loginButton: {
    width: 250
  },
  logo: {
    flexDirection: 'column',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picSize: {
    width: 100,
    height: 100
  },
  scroll: {
    paddingBottom: 30,
    marginBottom: 50,
    zIndex: 5
  }
};

export default ListScreen;
