import React from 'react';
import { View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon, List, ListItem, Button } from 'react-native-elements';
import { Platform, StatusBar } from 'react-native';
import * as Screen from '../screens';

export const InfoStack = StackNavigator({
   ProfileScreen: { screen: Screen.ProfileScreen },
}, {
   navigationOptions: {
      headerTitle: 'Profile',
      headerRight: <Icon name='gear' type='octicon' color='#ffffff' />,
      tabBarIcon: ({ tintColor }) => (
         <Icon name='user' type='font-awesome' color={tintColor} />
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