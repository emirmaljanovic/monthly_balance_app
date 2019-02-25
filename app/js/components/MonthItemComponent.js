import React, { Component } from 'react';
import { connect } from 'react-redux';

class MonthListItem extends Component {
  
  onMonthClick(event) {
    this.props.onActiveTab(this.props.month._id);
    this.props.getMonth(this.props.month._id);
  }

  render() {
    const month = this.props.month;

    return <li className={`month-list-item ${this.props.isActive ? 'active' : ''}`} 
      onClick={this.onMonthClick.bind(this)}>{month.title}</li>;
  }
}

export default MonthListItem;