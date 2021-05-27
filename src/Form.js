import React, { Component } from 'react';
import { If, Then } from 'react-if';
import './scss/Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body:''
    };
  }
  handleSecondarySubmit = (e) => {
    e.preventDefault();
    this.setState({body:e.target.value});
    console.log('HERE WE ARE INSIDE THE FORM ELEMENT ===============>>>><<<<<', this.state.body);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.handleClick(e, this.state.body);
    // let raw = await fetch('https://swapi.dev/api/people/');
    let requestOptions = {
      method: this.props.method,
      headers: { 'Content-Type': 'application/json' }
    };
    if(this.props.method === 'POST' || this.props.method === 'PUT') {
      requestOptions.body = this.state.body;
    }
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
          <div className="firstFormDiv">
            <input type="text" onChange={this.props.handleChange} ></input>
            <button onClick={this.props.handleClick2} className="methodBtn1" value="GET" >GET</button>
            <button onClick={this.props.handleClick2} className="methodBtn2" value="POST" >POST</button>
            <button onClick={this.props.handleClick2} className="methodBtn3" value="PUT" >PUT</button>
            <button onClick={this.props.handleClick2} className="methodBtn4" value="DELETE" >DELETE</button>
            <button onClick={this.handleSubmit} >Click here to submit</button>
          </div>
          <If condition={this.props.method === 'POST' || this.props.method === 'PUT'} >
            <Then>
              <div className="secondFormDiv">
                <textarea rows="10" cols="100" onChange={this.handleSecondarySubmit} placeholder="Please enter JSON data for your POST/PUT request"></textarea>
              </div>
            </Then>
          </If>
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

// {(this.props.method === 'POST' || this.props.method === 'PUT') && <textarea rows="5" cols="50" onChange={this.handleSecondarySubmit} placeholder="Please enter JSON data for your POST/PUT request"></textarea>}
