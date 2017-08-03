import React, { Component} from 'react';
import { Text, View } from 'react-native';

import * as DB from '../Backend';

export default class StudentScreen extends Component {

      constructor(props) {
         super(props);
      }

      state = {};

      categoriesRef = DB.rootRef.child("/categories");
      userRef = DB.rootRef.child("/users");

      componentWillMount() {
         console.log(this.categoriesRef);
      }

      getItems = () => {
         console.log(categoriesRef);
      };

      render() {
         return <View>
            <Text>StudentScreen</Text>
         </View>;
      }
}