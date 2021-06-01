import React, { Component } from 'react';
import { If, Then } from 'react-if';
import './scss/Form.scss';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      headers: '',
      results: {}
    };
  }
  handleSecondarySubmit = (e) => {
    e.preventDefault();
    this.setState({body:e.target.value});
    console.log('HERE WE ARE INSIDE THE FORM ELEMENT ===============>>>><<<<<', this.state.body);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.props.url) {
      alert('please type a valid URL');
      return;
    }
    this.props.toggleLoading();
    console.log('yes WE ARE TOGGLING that loading now');
    this.props.handleClick(e, this.state.body);
    // let raw = await fetch('https://swapi.dev/api/people/');
    let requestOptions = {
      method: this.props.method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'request.mode':'no-cors' },
    };

    if(this.props.method === 'POST' || this.props.method === 'PUT') {
      requestOptions.body = JSON.stringify(this.state.body);
    }



    try {
      // let raw = await fetch(this.props.url, requestOptions);
      axios({
        method: this.props.method,
        url: this.props.url,
        data: this.props.method === 'POST' || this.props.method === 'PUT' ? this.state.body : ''
      }).then(response => {
        // this.props.handler(response.data);
        this.props.handler(response);
        // this.setState({ results: response.data.results, headers: response.headers, status: response.status});
      }).then(this.props.method === 'POST' || this.props.method === 'PUT' ? this.props.handleHistory(this.props.url, this.props.method, this.state.body) : this.props.handleHistory(this.props.url, this.props.method));

      // let status = await raw.status;
      // let headers = await raw.headers;
      // let data = await raw.json();
      // await this.setState({ results: data.results, headers: headers, status: status});
      // await (this.props.method === 'POST' || this.props.method === 'PUT' ? this.props.handleHistory(this.props.url, this.props.method, this.props.body) : this.props.handleHistory(this.props.url, this.props.method));
    } catch(err) {
      console.log('HERE IS ERROR:', err.message);
      this.props.handleError(err);
      this.props.toggleLoading();
      console.log('yes WE ARE TOGGLING that loading now DUE TO ERROR');
    }
  }
  componentDidMount(){
    let btn1EL = document.getElementById('btn1');
    btn1EL.focus();
  }
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="firstFormDiv">
            <input type="text" onChange={this.props.handleChange} placeholder={this.props.formFromHistory}></input>
            <button onClick={this.props.handleClick2} className="methodBtn1" value="GET" id="btn1">GET</button>
            <button onClick={this.props.handleClick2} className="methodBtn2" value="POST" id="btn2" >POST</button>
            <button onClick={this.props.handleClick2} className="methodBtn3" value="PUT" id="btn3" >PUT</button>
            <button onClick={this.props.handleClick2} className="methodBtn4" value="DELETE" id="btn4" >DELETE</button>
            <button onClick={this.handleSubmit} className="methodBtn5">Click here to submit</button>
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
          <h3>requested URL: {this.props.show && this.props.url}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;

// {(this.props.method === 'POST' || this.props.method === 'PUT') && <textarea rows="5" cols="50" onChange={this.handleSecondarySubmit} placeholder="Please enter JSON data for your POST/PUT request"></textarea>}
