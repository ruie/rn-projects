import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import PostScreen from './screens/PostScreen';

export default Navigator = StackNavigator({
   LoginScreen: { screen: LoginScreen },
   StudentScreen: { screen: StudentScreen },
   PostScreen: { screen: PostScreen }
});