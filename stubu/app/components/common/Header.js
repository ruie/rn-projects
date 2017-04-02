import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
