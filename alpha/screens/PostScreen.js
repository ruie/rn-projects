import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class PostScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'New Post',
    headerLeft: <Icon name='close' type='font-awesome' color='#ffffff' onPress={() => navigation.goBack()} />,
    headerRight: <Icon name='check' type='font-awesome' color='#ffffff' onPress={() => navigation.goBack()} />,
    tabBarIcon: ({ tintColor }) => (
      <Icon name='list-ul' type='font-awesome' color={tintColor} />
    ),
  });

  render() {
    return (
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
        <FormInput
          placeholder={'Compose...'}
          numberOfLines={150}
        />
      </View>
    )
  }
}

export default PostScreen;