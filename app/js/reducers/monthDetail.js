const defaultState = {
  data: null,
  error: false,
  closeModal: false,
  gettingMonth: false,
  gettingTransactions: false
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_MONTH_RUNNING':
      return {
        ...state,
        gettingMonth: true
      }
    case 'GET_MONTH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        gettingMonth: false
      }
    case 'GET_MONTH_FAIL':
      return {
        ...state,
        data: null,
        error: true,
        gettingMonth: false
      }
    case 'UPDATE_TRANSACTIONS_SUCCESS':
      return {
        ...state,
        data: action.payload,
        closeModal: true
      }
  }

  return state;
};

export default reducer;