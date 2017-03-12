import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => {
  const { container, appLogo } = styles;

  return (
    <View style={container}>
      <Text style={appLogo}>
        {title}
      </Text>
    </View>
  );
};

const styles = {
  container: {
    marginTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  appLogo: {
    padding: 10,
    alignSelf: 'center',
    fontWeight: 'bold'
  }
};

export { Header };
