import { Platform, StatusBar, Image } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import TutorScreen from './screens/TutorScreen';
import PostScreen from './screens/PostScreen';
import FilterScreen from './screens/FilterScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoryScreen from './screens/CategoryScreen';

const Main = StackNavigator({
   LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
         header: null,
         tabBarVisible: false,
      },   
   },
   StudentScreen: { screen: StudentScreen },
   TutorScreen: { screen: TutorScreen },
   FilterScreen: { screen: FilterScreen },
   PostScreen: { screen: PostScreen },
   CategoryScreen: { screen: CategoryScreen }
}, {
   lazy: true,
   navigationOptions: {
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
   },
   
});

export default Navigator = TabNavigator({
   Main: { screen: Main }
}, {
   tabBarComponent: TabBarBottom,
   tabBarPosition: 'bottom',
   swipeEnabled: false,
   animationEnabled: false,
   lazy: true,
   tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
         backgroundColor: '#48B25D',
      },
      activeTintColor: '#000000',
      inactiveTintColor: '#ffffff',
   },
});

