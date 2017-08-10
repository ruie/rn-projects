import React, { Component } from 'react';
import {
   View,
   Text,
   FlatList
} from 'react-native';
import { Icon, List, ListItem, SearchBar } from 'react-native-elements';

export default class FilterScreen extends Component {

   static navigationOptions = ({ navigation }) => ({
      headerTitle: 'Subjects',
      headerLeft: <Icon name='close' type='font-awesome' color='#ffffff' onPress={() => navigation.goBack()} />,
      headerRight: <Icon name='check' type='font-awesome' color='#ffffff' onPress={() => navigation.goBack()} />,
      tabBarIcon: ({ tintColor }) => (
         <Icon name='list-ul' type='font-awesome' color={tintColor} />
      ),
   });

   render() {
      return (

         <View style={{ flex: 1 }}>
            <SearchBar
               lightTheme
               containerStyle={{ backgroundColor: '#C8C7CC', }}
               inputStyle={{ backgroundColor: '#ffffff', borderRadius: 7 }}
               round
               placeholder='Search' />

            <List
               containerStyle={{ marginTop: 0, backgroundColor: '#fff', flex: 1, borderBottomColor: '#F1F1F3', borderTopWidth: 1, borderBottomWidth: 0 }}>
               {/* <FlatList
                  data={data.subjects}
                  renderItem={({ item }) => (
                     <ListItem
                        hideChevron
                        title={<Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 7 }} >{`${item.name}`}</Text>}
                     />
                  )}
                  keyExtractor={item => item.name}
               /> */}
            </List>
         </View>
      );
   }
}