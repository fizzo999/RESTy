import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import './scss/Results.scss';
import History from './History.js';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="resultsContainer">
        <div className="resultsDiv">
          <ReactJson src={this.props.results} theme="summerfruit:inverted"/>
        </div>
        <div className="historyDiv">
          <History restyInput={this.props.restyInput} method={this.props.method} body={this.props.body} results={this.props.results}>
          </History>
        </div>
      </div>
    );
  }
}

export default Results;
