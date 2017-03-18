import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => {
  const { containerStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress}>
        <Text style={labelStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderColor: '#3B5998',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    padding: 5,
  },
  labelStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#3B5998',
    height: 20
  }
};

export { Button };
