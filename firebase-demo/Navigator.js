import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import FeedScreen from './screens/FeedScreen';

export const Login = StackNavigator({
   LoginScreen: { screen: LoginScreen },
   FeedScreen: { screen: FeedScreen }
});

// export const Feed = StackNavigator({
//    FeedScreen: { screen: FeedScreen }
// });