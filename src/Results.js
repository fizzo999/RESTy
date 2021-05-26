import React, { Component } from 'react';
import ReactJson from 'react-json-view';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div >
        <ReactJson src={this.props.results} theme="summerfruit:inverted"/>
      </div>
    );
  }
}

export default Results;
