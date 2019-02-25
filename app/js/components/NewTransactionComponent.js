import React, { Component } from 'react';

class NewTransactionComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: '',
      amount: '',
      description: '',
      type: 0,
      error: null
    };
  }

  dataIsValid(name, value) {
    let valid = true;
    
    if (value === '' || value === null) valid = false;
    if (name === 'date') valid = this.validateDate(value);

    return valid;
  }

  validateDate(date) {
    return date !== '' && (new Date(date).getMonth() === new Date().getMonth());
  }

  onTransactionSave(event) {
    let validData = [];
    
    for (let key in this.state) {
      validData.push(this.dataIsValid(key, this.state[key]));
    }

    if (validData.some((invalid) => !invalid)) {
      this.setState({error: `Ooops!! Something went wrong!`});
    } else {
      this.props.updateTransactions(this.state);
    }
  }

  onInputChange(event) {
    const { name, value } = event.target;
    const dataValid = this.dataIsValid(name, value);

    if (dataValid) {
      const newState = {};
      newState[name] = value;
      
      this.setState(newState);
    } else {
      this.setState({error: `Ooops!! ${name} is incorrect!`});
    }
  }

  render() {
    const { date, amount, description, type, error } = this.state;

    return (
      <div className='new-transaction-component'>
        <div className="title-bar">
          <h1>New Transaction</h1>
          <button className="close" onClick={this.props.onClose}></button>
        </div>
        <div className="body">
          <div className="input-wrapper">
            <input type="date" name="date" format="dd/mm/yyyy" placeholder="Date" value={date}
              onChange={this.onInputChange.bind(this)}/>
          </div>
          <div className="input-wrapper">
            <input type="number" name="amount" value={amount} placeholder="Amount" 
              onChange={this.onInputChange.bind(this)}/>
          </div>
          <div className="input-wrapper">
            <input type="text" name="description" value={description} placeholder="Description" 
              onChange={this.onInputChange.bind(this)}/>
          </div>
          <div className="input-wrapper">
            <select name="type" placeholder="Type" value={type} 
              onChange={this.onInputChange.bind(this)}>
              <option value="">Type</option>
              <option value="1">Option 1</option>
            </select>
          </div>
        </div>
        <div className="footer">
          {
            error ? 
              <div className="error-wrapper">
                <span className="error">{this.state.error}</span>
              </div>
              : null
          }
          <button className="btn-confirm" onClick={this.onTransactionSave.bind(this)}>
            Save
          </button>
          <button className="btn-cancel" onClick={this.props.onClose}>
            Cancel
          </button>
        </div>
      </div>
    )
  }
}

export default NewTransactionComponent;