import React, { Component } from 'react';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <h5>So here is your history</h5>
        <h5>{this.props.restyInput, this.props.method}</h5>
      </div>
    );
  }
}

export default History;
