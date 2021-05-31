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
      method: '',
      status: '',
      error: '',
      results: {},
      loading: false
    };
  }
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }
  handleSecondarySubmit = (e) => {
    e.preventDefault();
    this.setState({body:e.target.value});
    console.log('HERE WE ARE INSIDE THE FORM ELEMENT ===============>>>><<<<<', this.state.body);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.toggleLoading();
    this.props.toggleLoading();
    console.log('yes WE ARE TOGGLING that loading now');
    this.props.handleClick(e, this.state.body);
    this.setState({ method: this.props.method});

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
        data: this.state.method === 'POST' || this.state.method === 'PUT' ? this.state.body : ''
      }).then(response => {
        this.props.handler(response.data);
        this.setState({ results: response.data.results, headers: response.headers, status: response.status});
      }).then(this.state.method === 'POST' || this.state.method === 'PUT' ? this.props.handleHistory(this.props.url, this.state.method, this.state.body) : this.props.handleHistory(this.props.url, this.state.method));

      // let status = await raw.status;
      // let headers = await raw.headers;
      // let data = await raw.json();
      // await this.setState({ results: data.results, headers: headers, status: status});
      // await (this.state.method === 'POST' || this.state.method === 'PUT' ? this.props.handleHistory(this.props.url, this.state.method, this.state.body) : this.props.handleHistory(this.props.url, this.state.method));
    } catch(err) {
      console.log('HERE IS ERROR:', err.message);
      console.log('HERE IS ERROR STATUS:', this.state.status);
      this.setState({ error: err.message});
    }
    // setTimeout()
    this.toggleLoading();
    // this.props.toggleLoading();
    console.log('yes WE ARE TOGGLING that loading now');
    await this.props.handler(this.state.results);

  }
  // method=this.props.method
  // url=this.props.url
  render() {
    // console.log('HERE IS THAT STATE', this.state);
    return (
      <React.Fragment>
        <form>
          <div className="firstFormDiv">
            <input type="text" onChange={this.props.handleChange} ></input>
            <button onClick={this.props.handleClick2} className="methodBtn1" value="GET" style={{button:focus}}>GET</button>
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
          <h3>requested URL: {this.props.show && this.props.url}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;

// {(this.props.method === 'POST' || this.props.method === 'PUT') && <textarea rows="5" cols="50" onChange={this.handleSecondarySubmit} placeholder="Please enter JSON data for your POST/PUT request"></textarea>}
