import React from 'react';
import './scss/style.scss';
import Header from './Header.js';
import Footer from './Footer.js';
import Form from './Form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restyInput: 'please type an http address in the form above, select the method and hit GO!',
      method: '',
      show: false,
      methodClass: ''
    };
  }

  handleChange = e => {
    let restyInput = e.target.value;
    this.setState({ restyInput });
    // this.setState({ restyInput: restyInput });
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ show: true });
  }

  handleClick2 = e => {
    e.preventDefault();
    console.log('HERE IS THE BUTTON VALUE OF CLASSNAME========>>>>>>>>', e.target.className);
    let method = e.target.value;
    let methodClass = e.target.className;
    this.setState({ method, methodClass });
  }


  render() {
    return (
      <div>
        <Header />
        <Form handleChange={this.handleChange} handleClick={this.handleClick} handleClick2={this.handleClick2} method={this.state.method} restyInput={this.state.restyInput} show={this.state.show} methodClass={this.state.methodClass}/>
        <Footer />
      </div>
    );
  }
}

export default App;
