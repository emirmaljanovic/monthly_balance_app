const setError = (error) => {
  return function(dispatch) {
    dispatch({
      type: 'SET_ERROR',
      error
    });  
  }
};

const clearError = () => {
  return function(dispatch) {
    dispatch({
      type: 'CLEAR_ERROR'
    });  
  }
};

export default {
  setError,
  clearError
};