import { Platform, StatusBar, Image } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import TutorScreen from './screens/TutorScreen';
import PostScreen from './screens/PostScreen';
import FilterScreen from './screens/FilterScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoryScreen from './screens/CategoryScreen';

export const AuthStack = StackNavigator({
   LoginScreen: {
      screen: LoginScreen,
   }
});

const FeedStack = StackNavigator({
   StudentScreen: { screen: StudentScreen },
   TutorScreen: { screen: TutorScreen },
   PostScreen: { screen: PostScreen },
   FilterScreen: { screen: FilterScreen },
   CategoryScreen: { screen: CategoryScreen }
}, { mode: 'modal' })

export const MainStack = TabNavigator({
   FeedStack: { screen: FeedStack }
})