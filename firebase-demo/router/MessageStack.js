import { StackNavigator, TabNavigator } from 'react-navigation';
import * as Routes from '../screens';

export const MessageStack = StackNavigator({
   MessageScreen: { screen: Routes.MessageScreen },
   MessagesScreen: { screen: Routes.MessagesScreen },
});