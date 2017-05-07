import { TabNavigator, StackNavigator } from 'react-navigation';

import SplashScreen from './screens/SplashScreen';
import OptionScreen from './screens/OptionScreen';
import RecipesScreen from './screens/RecipesScreen';
import RecipeInfoScreen from './screens/RecipeInfoScreen';
import NutritionInfoScreen from './screens/NutritionInfoScreen';

const recipe = StackNavigator({
  recipes: { screen: RecipesScreen },
  recipeInfo: { screen: RecipeInfoScreen }
});

const options = StackNavigator({
  option: { screen: OptionScreen },
  nutrients: { screen: NutritionInfoScreen },
  recipe: {
    screen: recipe
  }
}, {
  headerMode: 'none'
});

const prevGetStateForAction = options.router.getStateForAction;
options.router = {
  ...options.router,
  getStateForAction(action, state) {
    if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.route.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1
      };
    }
    return prevGetStateForAction(action, state);
  }
};

// const nutrients = StackNavigator({
//   nutrientInfo: { screen: NutritionInfoScreen }
// });

const Navigator = TabNavigator({
  splash: { screen: SplashScreen },
  options: {
    screen: options
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
