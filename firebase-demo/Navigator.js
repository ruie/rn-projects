import { StackNavigator, TabNavigator } from 'react-navigation';

import * as Screen from './screens';
import * as Router from './router';

export const Login = StackNavigator({
   LoginScreen: { screen: Screen.LoginScreen },
}, {
   headerMode: 'none'
});

export const Main = TabNavigator({
   Feed: { screen: Router.FeedStack },
   Message: { screen: Router.MessageStack },
   Info: { screen: Router.InfoStack }
});

