'use strict';

import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';


const Post = (props) => {

  const { id, title } = props.post;

  return (
    <View>
      <Text>{id}</Text>
      <Text>{title}</Text>
    </View>
  );
}

const styles = {
  albumMeta: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  metaTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  albumThumbnailWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumThumbnail: {
    width: 50,
    height: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default Post;
