import { Platform, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import TutorScreen from './screens/TutorScreen';
import PostScreen from './screens/PostScreen';
import FilterScreen from './screens/FilterScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoryScreen from './screens/CategoryScreen';

const FeedStack = StackNavigator({
   StudentScreen: { screen: StudentScreen },
   TutorScreen: { screen: TutorScreen },
   PostScreen: { screen: PostScreen },
   FilterScreen: { screen: FilterScreen },
   CategoryScreen: { screen: CategoryScreen }
}, {
   mode: 'modal',
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
})

const ProfileStack = StackNavigator({
   ProfileScreen: { screen: ProfileScreen },
}, {
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

const MainStack = TabNavigator({
   FeedStack: { screen: FeedStack },
   ProfileStack: { screen: ProfileStack }
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

export const Navigator = StackNavigator({
   LoginScreen: { screen: LoginScreen},
   MainStack: { screen: MainStack }
}, {
   initialRouteName: 'LoginScreen',
   headerMode: 'none',
   lazy: true,
})