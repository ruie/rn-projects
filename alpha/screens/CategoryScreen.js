import React, { Component } from 'react';
import {
   View,
   Text,
   FlatList
} from 'react-native';
import { Icon, List, ListItem, SearchBar } from 'react-native-elements';

class CategoryScreen extends Component {

   static navigationOptions = ({ navigation }) => ({
      headerTitle: 'Select Subjects',
      headerLeft: <Icon name='close' type='font-awesome' color='#ffffff' onPress={() => navigation.goBack()} />,
      headerRight: <Icon name='check' type='font-awesome' color='#ffffff' onPress={() => navigation.goBack()} />,
      tabBarIcon: ({ tintColor }) => (
         <Icon name='list-ul' type='font-awesome' color={tintColor} />
      ),
   });

   render() {
      return (
         <View>
            <Text>CategoryScreen</Text>
         </View>
      );
   }
}

export default CategoryScreen;