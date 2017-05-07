import {
  FETCH_RECIPES,
} from '../actions/types';

const INITIAL_STATE = {
  results: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
