import React, { Component } from 'react';

class ErrorComponent extends Component {

  onErrorClose(event) {
    this.props.clearError();
  }

  render() {
    const { error } = this.props;

    return <div className={`error-component ${error.errmsg ? 'active': ''}`}>
     <p>{error.errmsg}</p>
     <span className="close" onClick={this.onErrorClose.bind(this)}>x</span>
    </div>;
  }
}

export default ErrorComponent;