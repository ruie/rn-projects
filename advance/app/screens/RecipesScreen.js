import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class RecipesScreen extends Component {

  static navigationOptions = {
    title: 'Recipes',
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('recipeInfo')}
        />
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
