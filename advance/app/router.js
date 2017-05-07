import { TabNavigator, StackNavigator } from 'react-navigation';

import SplashScreen from './screens/SplashScreen';
import OptionScreen from './screens/OptionScreen';
import CameraScreen from './screens/CameraScreen';
import RecipesScreen from './screens/RecipesScreen';
import RecipeInfoScreen from './screens/RecipeInfoScreen';
import NutritionInfoScreen from './screens/NutritionInfoScreen';

const recipe = StackNavigator({
  recipes: { screen: RecipesScreen },
  recipeInfo: { screen: RecipeInfoScreen }
});

const nutrients = StackNavigator({
  nutrientInfo: { screen: NutritionInfoScreen }
});

const Navigator = TabNavigator({
  splash: { screen: SplashScreen },
  options: { screen: OptionScreen },
  camera: { screen: CameraScreen },
  recipe: {
    screen: recipe
  },
  nutrients: {
    screen: nutrients
  }
}, {
  tabBarOptions: {
  },
  navigationOptions: {
    tabBarVisible: false
  },
  lazyLoad: true,
  swipeEnabled: false,
});

export default Navigator;
