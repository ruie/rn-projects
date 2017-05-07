import {
  CURRENT_IMAGE,
  CURRENT_OPTION,
  CURRENT_TAGS,
  FETCH_RECIPES,
  FETCH_NUTRIENTS,
  LIKE_RECIPE
} from '../actions/types';

const INITIAL_STATE = {
  image: null,
  currentOption: null,
  recipeResults: [],
  nutientsResult: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CURRENT_IMAGE:
      return { image: action.payload };
    case CURRENT_OPTION:
      return { currentOption: action.payload };
    default:
      return state;
  }
}
