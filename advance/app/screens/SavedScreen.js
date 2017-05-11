import React, { Component } from 'react';
import { View, Platform, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SavedScreen extends Component {

  static navigationOptions = {
    title: 'Recipes',
    style: {
      paddingTop: Platform.OS === 'android' ? 24 : 0
    }
  }

  render() {
    return (
      <View>
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

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(mapStateToProps, actions)(SavedScreen);
