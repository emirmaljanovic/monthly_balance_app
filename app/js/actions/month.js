import axios from 'axios';

import RequestConfig from '../config/request.config';

const getMonths = () => {
  return function(dispatch) {
    dispatch({type: 'FETCHING_MONTHS'})
    axios.get('month')
      .then(({ data }) => {
        dispatch({
          type: 'GET_MONTHS_DONE',
          payload: data
        });
      })
      .catch(({ response }) => {
        dispatch({type: 'GET_MONTH_FAIL', error: false});
        dispatch({type: 'SET_ERROR', error: response.data})
      });
  }
};

const addMonth = () => {
  return function(dispatch) {
    axios.post('month')
      .then((response) => dispatch({type: 'ADD_MONTH_SUCCESS', payload: data}))
      .catch(({ response }) => {
        dispatch({type: 'ADD_MONTH_FAIL', error: true});
        dispatch({type: 'SET_ERROR', error: response.data});
      });
  }
};

export default {
  getMonths,
  addMonth
};