import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import { LoginScreen } from './screens/LoginScreen';
import * as Stacks from './stacks';

export const Login = StackNavigator({
   LoginScreen: { screen: LoginScreen },
}, {
   headerMode: 'none'
});

export const Main = TabNavigator({
   Feed: { screen: Stacks.FeedStack },
   Message: { screen: Stacks.MessageStack },
   Info: { screen: Stacks.InfoStack }
}, {
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      animationEnabled: false,
      tabBarOptions: {
         showIcon: true,
         showLabel: false,
         style: {
            backgroundColor: '#48B25D',
         },
         activeTintColor: '#006F00',
         inactiveTintColor: '#ffffff',

      },
});

