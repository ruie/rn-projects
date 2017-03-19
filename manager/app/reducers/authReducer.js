const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  status: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'email_changed':
      return { ...state, email: action.payload, status: '' };
    case 'password_changed':
      return { ...state, password: action.payload, status: '' };
    case 'login_User':
      return { ...state, loading: true };
    case 'login_Success':
      return { ...state,
        ...INITIAL_STATE,
        user: action.payload,
        status: 'Success',
        loading: false
      };
    case 'login_Failed':
      return { ...state,
        status: 'Authentication Failed',
        loading: false,
        password: ''
      };
    default:
      return state;
  }
};
