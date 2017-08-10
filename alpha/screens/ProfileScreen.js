import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon, Avatar, Card, ListItem } from 'react-native-elements';

export default class ProfileScreen extends Component {

   static navigationOptions = ({ navigation }) => ({
      headerTitle: 'Stubu',
      headerRight: <Icon name='cog' type='font-awesome' color='#ffffff' onPress={() => navigation.goBack('Settings')} />,
      tabBarIcon: ({ tintColor }) => (
         <Icon name='user-o' type='font-awesome' color={tintColor} />
      ),
   });

   render() {
      return (
         <View>
            <Text>
               ProfileScreen
            </Text>
         </View>
      );
   }
}