
'use strict'

import React from 'react';
import {
  View,
  Text
} from 'react-native';

const Header = (props) => {

  const { logoStyle, headerStyle } = styles;

  return (
    <View style={headerStyle}>
      <Text style={logoStyle}>{props.logoTitle}</Text>
    </View>
  );
}

const styles = {
  logoStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowColor: '#000'
  }
}

export default Header;
