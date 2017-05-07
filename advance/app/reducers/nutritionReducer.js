import {
  FETCH_NUTRITION,
} from '../actions/types';

const INITIAL_STATE = {
  total: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_NUTRITION:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
