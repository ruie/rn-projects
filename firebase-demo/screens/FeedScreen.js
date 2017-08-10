import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon, List, ListItem, Button } from 'react-native-elements';

import { fireabaseAuth } from '../api/firebase';
import { LoginWithFacebook, test, logout } from '../api/auth';

class FeedScreen extends Component {

   static navigationOptions = {
      headerLeft: <Icon name='open-book' type='entypo' color='#ffffff' />,
   }

   render() {
      return (
         <View style={styles.container}>
            <Text>{FeedScreen}</Text>
            <Button
               title={'Test'}
               onPress={() => test()}
            />
            <Button
               title={'TutorScreen'}
               onPress={() => this.props.navigation.navigate('TutorScreen')}
            />
            <Button
               title={'PostScreen'}
               onPress={() => this.props.navigation.navigate('PostScreen')}
            />
            <Button
               title={'Logout'}
               onPress={() => logout()}
            />
         </View>
      );
   }
}

const styles = {
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-around',
   },
};

export { FeedScreen };