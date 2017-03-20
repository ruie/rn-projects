import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'password_changed',
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: 'login_User' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginSuccess(dispatch, user))
        .catch(() => loginFailed(dispatch));
      });
  };
};

const loginSuccess = (dispatch, user) => {
  dispatch({ type: 'login_Success', payload: user });
  Actions.main();
};

const loginFailed = (dispatch) => {
  dispatch({ type: 'login_Failed' });
};
