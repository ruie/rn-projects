import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MessagesScreen extends Component {
   state = {}
   render() {
      return (
         <View style={styles.container}>
            <Text>
               MessagesScreen
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

export {MessagesScreen};