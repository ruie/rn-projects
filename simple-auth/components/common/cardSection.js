import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = CardStyles;

  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const CardStyles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    padding: 7,
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
