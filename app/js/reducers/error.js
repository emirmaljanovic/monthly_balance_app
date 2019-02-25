const defaultState = {
  error: {
    errmsg: ''
  }
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error
      }
      case 'CLEAR_ERROR':
        return {
          ...state,
          error: {
            errmsg: ''
          }
        }
  }

  return state;
};

export default reducer;