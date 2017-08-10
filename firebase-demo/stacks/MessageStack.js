import React from 'react';
import { View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon, List, ListItem, Button } from 'react-native-elements';
import { Platform, StatusBar } from 'react-native';
import * as Routes from '../screens';

export const MessageStack = StackNavigator({
   MessagesScreen: { screen: Routes.MessagesScreen },
   MessageScreen: { screen: Routes.MessageScreen },
}, {
   navigationOptions: {
      headerTitle: 'Messages',
      tabBarIcon: ({ tintColor }) => (
         <Icon name='chat' type='entypo' color={tintColor} />
      ),
      headerTitleStyle: {
         color: '#ffffff',
         fontWeight: 'bold',
         alignSelf: 'center'
      },
      headerStyle: {
         backgroundColor: '#48B25D',
         marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
         paddingRight: 10,
         paddingLeft: 10,
      },
   }
});