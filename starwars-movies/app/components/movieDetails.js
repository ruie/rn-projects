import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

const MovieDetails = (props) => {
  const { Title, Poster, Year } = props.movie;
  return (
    <View>
      <Text>{ Title }</Text>
      <Text>{ Year }</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: Poster }}
      />
    </View>
  );
};

export default MovieDetails;
