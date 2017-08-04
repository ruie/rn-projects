import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import TutorScreen from './screens/TutorScreen';
import PostScreen from './screens/PostScreen';
import ProfileScreen from './screens/ProfileScreen';

export default Navigator = StackNavigator({
   LoginScreen: { screen: LoginScreen },
   StudentScreen: { screen: StudentScreen },
   TutorScreen: { screen: TutorScreen },
   PostScreen: { screen: PostScreen }
}, {
   lazyLoad: true
});