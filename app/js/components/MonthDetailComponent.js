import React, { Component } from 'react';

import NewTransactionComponent from './NewTransactionComponent';
import TransactionTableComponent from './TransactionTableComponent';

class MonthDetailComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showNewTransactionPopup: false
    };
  }

  onNewTransactionOpen(event) {
    this.setState({showNewTransactionPopup: true});
  }

  onNewTransactionClose() {
    this.setState({showNewTransactionPopup: false})
  }

  updateTransactions(newTransaction) {
    const { transactions, _id } = this.props.month.data;
    transactions.push(newTransaction);

    this.props.updateTransactions(_id, transactions);
  }

  componentWillUpdate(nextProps, nextState) {
    const { closeModal } = nextProps.month;
    const { showNewTransactionPopup } = this.state;

    if (showNewTransactionPopup && closeModal) this.onNewTransactionClose();
  }

  render() {
    if (this.props.month.data) {
      const { month, month: { data } } = this.props;
      const { transactions } = data;
      const { showNewTransactionPopup } = this.state;
      const allowNewTransactions = data.date == new Date().getMonth();
      const trend = 
        data.trend.status === 'up' ? '&#x2197;' : 
        data.trend.status === 'down' ? '&#x2198;' : '&#10137;';

      return (
        <div className="month-detail">
          <h1 className="title">{data.title}</h1>
          <div className="summary">
            <span>Income: {data.income}</span>
            <span>Expenses: {data.expenses}</span>
            <span>End balance: {data.endBalance}</span>
            <span className="trend">Trend: 
              {
                data.trend.status === 'up' ? <span>&#x2197;</span> : 
                data.trend.status === 'down' ? <span>&#x2198;</span> : 
                <span>&#10137;</span>
              }
            </span>
          </div>
          <div className="table-area">
            <TransactionTableComponent transactions={transactions} />
          </div>
          {
            allowNewTransactions ? 
              <div className="add-transaction">
                <button onClick={this.onNewTransactionOpen.bind(this)}>
                    <span>+ New transaction</span>
                </button>
              </div> 
              : null
          }
          {
            showNewTransactionPopup && allowNewTransactions ?
              <div className="new-transaction-wrapper">
                <NewTransactionComponent
                  updateTransactions={this.updateTransactions.bind(this)}
                  onClose={this.onNewTransactionClose.bind(this)}/>
              </div> 
              : null
          }
        </div>);
    } else {
      return (<div className="month-detail empty">
        <h1>Create or select month...</h1>
      </div>);
    }
  }
}

export default MonthDetailComponent;