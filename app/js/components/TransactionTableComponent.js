import React, { Component } from 'react';

class TableComponent extends Component {

  render() {
    let { transactions } = this.props || [];

    transactions = transactions.map((transaction, index) => {
      return <tr key={index}>
          <td className="date">{new Date(transaction.date).toLocaleDateString()}</td>
          <td className="number">{transaction.amount}</td>
          <td>{transaction.description}</td>
          <td>{transaction.type}</td>
        </tr>
    });

    return <div className="transaction-table-component">
      <h1 className="title">Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>
              Date
            </th>
            <th>
              Amount
            </th>
            <th>
              Description
            </th>
            <th>
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions}
        </tbody>
      </table>
    </div>
  }
}

export default TableComponent;