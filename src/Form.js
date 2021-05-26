import React, { Component } from 'react';
import './scss/Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.handleClick(e);
    // let raw = await fetch('https://swapi.dev/api/people/');
    let requestOptions = {
      method: this.props.method,
      headers: { 'Content-Type': 'application/json' }
    };
    let raw = await fetch(this.props.restyInput, requestOptions);
    let data = await raw.json();
    this.props.handler(data.results);

  }
  // method=this.props.method
  // restyInput=this.props.restyInput
  render() {
    return (
      <React.Fragment>
        <form>
          <input type="text" onChange={this.props.handleChange} ></input>
          <button onClick={this.props.handleClick2} className="methodBtn1" value="GET" >GET</button>
          <button onClick={this.props.handleClick2} className="methodBtn2" value="POST" >POST</button>
          <button onClick={this.props.handleClick2} className="methodBtn3" value="PUT" >PUT</button>
          <button onClick={this.props.handleClick2} className="methodBtn4" value="DELETE" >DELETE</button>
          <button onClick={this.handleSubmit} >Click here to submit</button>
        </form>
        <div className="container1">
          {this.props.show && (<h2 className={this.props.methodClass}>{this.props.method}</h2>)}
          <h3>requested URL: {this.props.show && this.props.restyInput}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
