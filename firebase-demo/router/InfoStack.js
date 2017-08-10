import { StackNavigator, TabNavigator } from 'react-navigation';
import * as Screen from '../screens';

export const InfoStack = StackNavigator({
   ProfileScreen: { screen: Screen.ProfileScreen },
});