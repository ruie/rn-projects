import { StackNavigator, TabNavigator } from 'react-navigation';

import * as Routes from './screens';

const MessageStack = StackNavigator({
   MessageScreen: { screen: Routes.MessageScreen },
   MessagesScreen: { screen: Routes.MessagesScreen },
});

const FeedStack = StackNavigator({
   FeedScreen: { screen: Routes.FeedScreen },
   TutorScreen: { screen: Routes.TutorScreen },
   PostScreen: { screen: Routes.PostScreen },
});

const InfoStack = StackNavigator({
   ProfileScreen: { screen: Routes.ProfileScreen },
});

export const Login = StackNavigator({
   LoginScreen: { screen: Routes.LoginScreen },
});

export const Main = TabNavigator({
   Feed: { screen: FeedStack },
   Message: { screen: MessageStack },
   Info: { screen: InfoStack }
});

