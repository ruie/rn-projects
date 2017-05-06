import { TabNavigator, StackNavigator } from 'react-navigation';

import {
  HomeScreen,
  CameraScreen,
  ListScreen,
  RecipeScreen,
} from './screens';

import SplashScreen from './screens/SplashScreen';

const MainNavigator = TabNavigator({
  splash: { screen: SplashScreen },
  main: {
    screen: TabNavigator({
      home: { screen: HomeScreen },
      camera: { screen: CameraScreen },
      view: {
        screen: StackNavigator({
          list: { screen: ListScreen },
          recipe: { screen: RecipeScreen }
        })
      }
    })
  }
});

export default MainNavigator;
