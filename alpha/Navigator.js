import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import TutorScreen from './screens/TutorScreen';
import PostScreen from './screens/PostScreen';
import FilterScreen from './screens/FilterScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoryScreen from './screens/CategoryScreen';

const Main = StackNavigator({
   StudentScreen: { screen: StudentScreen },
   TutorScreen: { screen: TutorScreen },
   FilterScreen: { screen: FilterScreen },
   PostScreen: { screen: PostScreen },
   CategoryScreen: { screen: CategoryScreen }
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
   lazyLoad: true
});

export default Navigator = TabNavigator({
   LoginScreen: { 
      screen: LoginScreen,
  
   },
   Main: { screen: Main }
}, {
   lazyLoad: true
});

