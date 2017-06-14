import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   Platform,
   FlatList,
   StatusBar
} from 'react-native';
import { Constants } from 'expo';
import NavBar from 'react-native-navbar';

class Screen2 extends Component {

   static navigationOptions = {
      headerTitle: <Text>Screen 2</Text>,
      headerStyle: {
         paddingTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0
      }
   }

   state = {
      isLoading: false,
      error: false,
      posts: [],
   }

   componentWillMount = async () => {
      try {
         const response = await fetch('https://jsonplaceholder.typicode.com/photos/')
         const posts = await response.json();
         this.setState({ posts });
         console.log(this.state.posts);
      } catch(e) {}
   }

   renderItem = ({ item }) => {
      return (
         <View>
            <Text>{item.title}</Text>
            <Image source={{ uri: item.thumbnailUrl}} style={{ width: 100, height: 100 }}/>
         </View>
      );
   }

   extractKey = ({id}) => id;

	render() {
		return (
         <View style={{flex: 1}}>
            <FlatList
               data={this.state.posts}
               renderItem={this.renderItem}
               keyExtractor={this.extractKey}
            />
			</View>	
		);
	}
};

const styles = {
	top: {
		backgroundColor: '#000',
		padding: 0,
	},
	text: {
		color: '#fff'
	}
}

export default Screen2;