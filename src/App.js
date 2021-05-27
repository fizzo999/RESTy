import React from 'react';
import './scss/style.scss';
import Header from './Header.js';
import Footer from './Footer.js';
import Form from './Form.js';
import Results from './Results.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restyInput: 'please type an http address in the form above, select the method and hit GO!',
      method: '',
      show: false,
      methodClass: '',
      results: [],
      bodyFromFunction: ''
    };
  }

  handleChange = e => {
    let restyInput = e.target.value;
    this.setState({ restyInput });
    // this.setState({ restyInput: restyInput });
  }

  handleClick = async (e, bodyFromFunction )=> {
    e.preventDefault();
    this.setState({ show: true });
    await this.setState({ bodyFromFunction });
    // console.log('second try =========>>>>>>>>>>>>>>>>', bodyFromFunction);
    // console.log('and the STATE try =========>>>>>>>>>>>>>>>>', this.state);
  }

  handleClick2 = e => {
    e.preventDefault();
    // console.log('HERE IS THE BUTTON VALUE OF CLASSNAME========>>>>>>>>', e.target.className);
    let method = e.target.value;
    let methodClass = e.target.className;
    this.setState({ method, methodClass });
  }

  handleForm = (results) => {
    this.setState({ results });
    // console.log('here is the this.state.results ==============>>>>>>>>>', this.state.results);
  }


  render() {
    return (
      <div>
        <Header />
        <Form handleChange={this.handleChange} handleClick={this.handleClick} handleClick2={this.handleClick2} method={this.state.method} restyInput={this.state.restyInput} show={this.state.show} methodClass={this.state.methodClass} handler={this.handleForm} secondaryInput={this.state.secondaryInput}/>
        <Results restyInput={this.state.restyInput} method={this.state.method} body={this.state.bodyFromFunction} results={this.state.results}/>
        <Footer />
      </div>
    );
  }
}

export default App;
