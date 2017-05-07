import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class RecipesScreen extends Component {

  static navigationOptions = {
    title: 'Recipes',
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
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
        <Text>RecipesScreen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
}

export default RecipesScreen;
