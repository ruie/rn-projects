import React, { Component } from 'react';
import { View, Text, Platform, FlatList } from 'react-native';
import { Button, Icon, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class RecipesScreen extends Component {

  static navigationOptions = {
    title: 'Recipes',
    style: {
      paddingTop: Platform.OS === 'android' ? 24 : 0
    }
  }

  render() {
    return (
      <View>
        {/* <Button
          onPress={() => this.props.navigation.navigate('recipeInfo')}
        /> */}
        <List>
          <FlatList
            data={this.props.recipes}
            renderItem={({ item }) => (
              <ListItem
                title={`${item.title}`}
                subtitle={item.ingredients}
              />
            )}
            keyExtractor={item => item.title}
          />
        </List>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(mapStateToProps, actions)(RecipesScreen);
