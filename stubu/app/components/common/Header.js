import React from 'react';
import {
  View,
  Text
} from 'react-native';

const Header = ({ style, title}) => {
  return (
    <View>
      <Text style={style}>
        {title}
      </Text>
    </View>
  );
}

export { Header };
