import {
  FETCH_RECIPES,
  FETCH_NUTRIENTS,
  LIKE_RECIPE
} from '../actions/types';

const INITIAL_STATE = {
  results: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.payload;
    default:
      return state;
  }
}
