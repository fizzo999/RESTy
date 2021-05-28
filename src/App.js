import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.scss';
import Header from './Header.js';
import Footer from './Footer.js';
import Form from './Form.js';
import Results from './Results.js';
import History from './History.js';
import Help from './Help.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'please type an http address in the input field above, select the method and hit GO!',
      method: '',
      show: false,
      methodClass: '',
      results: [],
      headersFromFunction:'',
      bodyFromFunction: '',
      errorType:'',
      history: [],
      historyFromStorage: []
    };
  }

  handleChange = async e => {
    let url = await e.target.value;
    await this.setState({ url });
    // this.setState({ url: url });
  }

  handleClick = async (e, bodyFromFunction )=> {
    e.preventDefault();
    this.setState({ show: true });
    await this.setState({ bodyFromFunction });
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
  }

  handleHistory = (url, method, body=null) => {
    this.setState({ history: [...this.state.history, { method, url, body }] });
    // if(!localStorage.getItem(`${method} - ${url}`)) {
    if(!localStorage.getItem('FizzoKey')) {
      // localStorage.setItem(`${method} - ${url}`, JSON.stringify({ method, url, body}));
      localStorage.setItem('FizzoKey', JSON.stringify({ method, url, body}));
    } else {
      let newStorageArray = [];
      let oldStorage = JSON.parse(localStorage.getItem('FizzoKey'));
      console.log('HERE IS OLD STORAGE !!!!!! OBJ !!!!', oldStorage);
      // this.setState({historyFromStorage:[...this.state.historyFromStorage, oldStorage]});
      newStorageArray.push(oldStorage);
      newStorageArray.push({ method, url, body});
      // newStorageArray.contains({ method, url}) && newStorageArray.push({ method, url, body});
      localStorage.setItem('FizzoKey', JSON.stringify(newStorageArray));
      this.setState({historyFromStorage: newStorageArray});

    }
  }
  loadHistory = async (e) => {
    console.log('HERE IS YOUR HISTORY DATA, OK', e.target.innerHTML);
    let tempArr = e.target.innerHTML.split(' - ');
    await this.setState({ method: tempArr[0], url: tempArr[1] });
  }
  render() {
    console.log('HERE IS HISTORY AFTER', this.state.history);
    console.log('HERE IS HISTORY FROM STORAGE', this.state.historyFromStorage);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Form handleChange={this.handleChange} handleClick={this.handleClick} handleClick2={this.handleClick2} method={this.state.method} url={this.state.url} show={this.state.show} methodClass={this.state.methodClass} handler={this.handleForm} secondaryInput={this.state.secondaryInput} handleHistory={this.handleHistory}/>
            <Results url={this.state.url} method={this.state.method} body={this.state.bodyFromFunction} results={this.state.results} handleHistory={this.handleHistory}/>
          </Route>
          <Route path="/history">
            <History url={this.props.url} method={this.props.method} body={this.props.body} results={this.props.results} loadHistory={this.loadHistory} history={this.state.history} >
            </History>
          </Route>
          <Route path="/help">
            <Help>
            </Help>
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
