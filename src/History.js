import React, { Component } from 'react';
import { If, Then } from 'react-if';
import { Link } from 'react-router-dom';
import './scss/History.scss';


class History extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('SO HERE WE ARE IN THE HISTORY ELEMENT AND WE ARE LISTENING TO STATE', this.props.history);
    return (
      <div id="historyDiv">
        <h3>So here is your history</h3>
        <ul>
          <If condition={this.props.history}>
            <Then>
              {this.props.history.map((item, idx) => <li key={idx}><Link to="/"><button onClick={this.props.loadHistory}>{item.method} - {item.url}</button></Link></li>)}
            </Then>
          </If>
        </ul>
      </div>
    );
  }
}
export default History;
