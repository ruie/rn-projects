import * as types from './types';

export const switchStatus = (status) => dispatch => {
   if(status === 'tutor') {
      dispatch({ type: types.SCREEN_TUTOR });
   } else {
      dispatch({ type: types.SCREEN_STUDENT });
   }
}