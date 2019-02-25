import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import MonthListComponent from './MonthListComponent';
import MonthDetailComponent from './MonthDetailComponent';
import ErrorComponent from './ErrorComponent';

import actionCreators from '../actions';

class Layout extends Component {

    render() {

        return <div className = "app-wrapper">
            <MonthListComponent {...this.props} />
            <MonthDetailComponent {...this.props} />
            <ErrorComponent {...this.props} /> 
        </div>;
    }
}

/**
 * Maps out Store object to state properties.
 * @param {Object} store - Store object.
 */
function mapStateToProps(store){
    return {
        months: store.monthReducer.months,
        month: store.monthDetailReducer,
        error: store.errorReducer.error
    };
}

function mapDispatchToProps(dispatch) {
    const { monthActions, errorActions, monthDetailActions, localActions } = actionCreators;
    return bindActionCreators({...monthActions, ...errorActions, ...monthDetailActions, ...localActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);