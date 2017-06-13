import React, { Component } from 'react';
import {
   Text,
   View
} from 'react-native';

import Navigator from './router';

class App extends Component {
   render() {
      return (
         <Navigator />
      );
   }
};

export default App;