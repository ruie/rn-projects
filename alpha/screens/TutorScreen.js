import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Icon, List, ListItem, } from 'react-native-elements';

export default class TutorScreen extends Component {

   static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
      return {
         headerTitle: 'Stubu',
         headerLeft: <Icon name='book' type='font-awesome' color='#ffffff' onPress={() => navigation.navigate('StudentScreen')} />,
         headerRight: (
            <View style={{ flexDirection: 'row' }}>
               <Icon name='align-left' type='font-awesome' color='#ffffff' style={{ marginRight: 10 }} onPress={() => navigation.navigate('Filter')} />
            </View>
         ),
         tabBarIcon: ({ tintColor }) => (
            <Icon name='list-ul' type='font-awesome' color={tintColor} />
         ),
      }
   };

   render() {
      return (
         <View>
            <Text>
               TutorScreen
            </Text>
         </View>
      );
   }
}