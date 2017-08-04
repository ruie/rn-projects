import * as types from '../actions/types';

const INITIAL_STATE = {
   status: 'student'
}
export default function (state = INITIAL_STATE, action) {
   switch(action.type) {
      case types.SCREEN_STUDENT:
         return { status: 'student' }
      case types.SCREEN_TUTOR:
         return { status: 'tutor' }
      default:
         return state;
   }
}