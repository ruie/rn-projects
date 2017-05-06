import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class ListScreen extends Component {

  static navigationOptions = {
    title: 'Review Jobs',
    headerKey: ({ navigate }) => {
      return {
        right: (
          <Button title="Recipe" onPress={() => navigate('recipe')} />
        )
      };
    },
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  }

  render() {
    return (
      <View>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
        <Text>List Screen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
}

export { ListScreen };
