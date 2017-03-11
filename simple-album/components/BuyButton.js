import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BuyButton = ({ goto, title }) => {
  return (
    <TouchableOpacity style={styles.container}onPress={goto}>
      <Text style={styles.textStyle}>Buy {title}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  textStyle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  }
}

export default BuyButton;
