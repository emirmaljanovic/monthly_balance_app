const defaultState = {
  months: [],
  error: false,
  fetching: false
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCHING_MONTHS':
      return {
        ...state,
        fetching: true
      }
    case 'GET_MONTHS_DONE':
      return {
        ...state,
        months: action.payload,
        error: false,
        fetching: false
      }
    case 'GET_MONTHS_FAILED':
      return {
        ...state,
        error: true,
        fetching: false
      }
    case 'ADD_MONTH_SUCCESS':
      return {
        ...state,
        months: [...months, action.payload],
        error: false
      }
    case 'ADD_MONTH_FAIL':
      return {
        ...state,
        error: true
      }
  }

  return state;
};

export default reducer;