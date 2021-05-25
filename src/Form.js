import React, { Component } from 'react';
import './scss/Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
          <button onClick={this.props.handleClick} >Click here to submit</button>
        </form>
        {this.props.show && (<h2 className={this.props.methodClass}>{this.props.method}</h2>)}
        <h3>requested URL: {this.props.show && this.props.restyInput}</h3>
      </React.Fragment>
    );
  }
}

export default Form;
