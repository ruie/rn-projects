import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { container } = styles;

  return (
    <View style={container}>
      {props.children}
    </View>
  );
};

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 80
  }
};

export { Card };
