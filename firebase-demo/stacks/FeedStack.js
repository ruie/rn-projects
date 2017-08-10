import React from 'react';
import { View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon, List, ListItem, Button } from 'react-native-elements';
import { Platform, StatusBar } from 'react-native';
import * as Screen from '../screens';

export const FeedStack = StackNavigator({
   FeedScreen: { screen: Screen.FeedScreen },
   TutorScreen: { screen: Screen.TutorScreen },
   PostScreen: { screen: Screen.PostScreen },
}, {
   navigationOptions: {
      headerTitle: 'Stubu',
      headerRight: (
         <View style={{ flexDirection: 'row' }}>
            <Icon name='sound-mix' type='entypo' color='#ffffff' style={{ marginRight: 10 }} />
            <Icon name='new-message' type='entypo' color='#ffffff' />
         </View>
      ),
      tabBarIcon: ({ tintColor }) => (
         <Icon name='list' type='entypo' color={tintColor} />
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