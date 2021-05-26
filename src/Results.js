import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import './scss/Results.scss';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="resultsDiv">
        <ReactJson src={this.props.results} theme="summerfruit:inverted"/>
      </div>
    );
  }
}

export default Results;
