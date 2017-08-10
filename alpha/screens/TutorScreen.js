import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Icon, List, ListItem, } from 'react-native-elements';

<<<<<<< HEAD
import * as actions from '../actions';
import firebase from '../firebase';

class TutorScreen extends Component {
=======
export default class TutorScreen extends Component {
>>>>>>> fb-demo

   static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
      return {
         headerTitle: 'Stubu',
         headerLeft: <Icon name='user-circle' type='font-awesome' color='#ffffff' onPress={() => navigation.navigate('StudentScreen')} />,
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