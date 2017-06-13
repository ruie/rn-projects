import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';

const MainStack = StackNavigator({
   Screen2: { screen: Screen2 }
});

const Navigator = TabNavigator({
   Screen1: { screen: Screen1 },
   MainStack: { screen: MainStack },
   Screen3: { screen: Screen3 }
}, {
   tabBarComponent: TabBarBottom,
   tabBarPosition: 'bottom',
   swipeEnabled: true,
   animationEnabled: false,
});

export default Navigator;