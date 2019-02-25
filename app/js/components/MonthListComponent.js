import React, { Component } from 'react';
import { connect } from 'react-redux';

import MonthItemComponent from './MonthItemComponent';
import ErrorComponent from './ErrorComponent';

class MonthListComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedMonthId: null
    };
  }

  componentWillMount() {
    this.props.getMonths();
  }

  onMonthAdd(event) {
    this.props.addMonth();
  }

  onErrorClose(event) {
    this.props.dispatch({type: 'CLEAR_ERRORS'});
  }

  isActiveItem(month_id) {
    return this.state.selectedMonthId === month_id;
  }

  setActiveItem(month_id) {
    this.setState({selectedMonthId: month_id});
  }

  render() {
    const { months } = this.props;
    const monthList = months.map((monthItem) => 
      <MonthItemComponent 
        key={monthItem._id} 
        month={monthItem} 
        getMonth={this.props.getMonth}
        onActiveTab={this.setActiveItem.bind(this)}
        isActive={this.isActiveItem(monthItem._id)} 
      />);

    return <ul className="month-list">
        {monthList}
        <li className="month-list-item new" onClick={this.onMonthAdd.bind(this)}>+</li>
      </ul>;
  }
}

export default MonthListComponent;