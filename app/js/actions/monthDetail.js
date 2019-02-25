import axios from 'axios';

const getMonth = (monthId) => {
  return function(dispatch) {
    dispatch({type: 'GET_MONTH_RUNNING'});
    axios.get(`/month/${monthId}`)
      .then(({ data }) => {
        dispatch({
          type: 'GET_MONTH_SUCCESS',
          payload: data
        });
      })
      .catch((err) => {
        dispatch({type: 'GET_MONTH_FAIL', error: true});
        console.log(err);
        dispatch({type: 'SET_ERROR', error: response.error});
      });
  }
};

const updateTransactions = (monthId, transactions) => {
  return function(dispatch) {
    axios.post(`/month/${monthId}`, transactions) // Use PATCH
      .then(({ data }) => {
        dispatch({type: 'UPDATE_TRANSACTIONS_SUCCESS', payload: data});
      })
      .catch((err) => dispatch({type: 'UPDATE_TRANSACTIONS_FAIL'}));
  }
};

export default {
  getMonth,
  updateTransactions
};