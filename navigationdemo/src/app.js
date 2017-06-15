import React, { Component } from 'react';
import {
   Text,
   View
} from 'react-native';

import Navigator from './router';

export default class App extends Component {
   render() {
      return (
         <Navigator />
         <View>
            <Text>Testing</Text>
         </View>
      );
   }
};

