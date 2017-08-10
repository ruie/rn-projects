import { StackNavigator, TabNavigator } from 'react-navigation';
import * as Screen from '../screens';

export const FeedStack = StackNavigator({
   FeedScreen: { screen: Screen.FeedScreen },
   TutorScreen: { screen: Screen.TutorScreen },
   PostScreen: { screen: Screen.PostScreen },
}, {
   navigationOptions: {
      headerTitle: 'Stubu'
   }
});