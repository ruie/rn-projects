import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ProfileScreen extends Component {
   state = {}
   render() {
      return (
         <View style={styles.container}>
            <Text>
               ProfileScreen
            </Text>
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

export {ProfileScreen};