'use strict';

import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import BuyButton from './BuyButton';

const AlbumDetail = (props) => {

  const { title, artist, thumbnail_image, image, url } = props.album;
  const {
    albumThumbnailWrap,
    albumThumbnail,
    albumMeta,
    metaTitle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={albumThumbnailWrap}>
          <Image
            style={albumThumbnail}
            source={{ uri: thumbnail_image}} />
        </View>
        <View style={albumMeta}>
          <Text style={metaTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{uri: image}}/>
      </CardSection>

      <CardSection>
        <BuyButton goto={() => Linking.openURL(url)} title={title}/>
      </CardSection>
    </Card>
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

export default AlbumDetail;
