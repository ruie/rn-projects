import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text>{label}</Text>
      <TextInput
        underlineColorAndroid={'transparent'}
        autoCapitalize={'none'}
        placeholder={placeholder}
        style={inputStyle}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    padding: 5,
    flex: 1,
    alignItems: 'center'
  },
  labelStyle: {
    flex: 1,
  },
  inputStyle: {
    flex: 2,
    height: 20,
    width: 100,
    color: '#000',
    marginLeft: 10,
  }
};

export { Input };
