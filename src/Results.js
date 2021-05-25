import React, { Component } from 'react';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="apiResults">
        <ul>
          {Object.keys(this.props.results).map((item, idx) => {
            return (
              <li key={idx}>
                <a href={this.props.results[item]} >{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Results;
