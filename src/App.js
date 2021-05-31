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
      method: 'GET',
      show: false,
      methodClass: 'GET',
      results: [],
      headersFromFunction:'',
      bodyFromFunction: '',
      errorType:'',
      history: [],
      historyFromStorage: [],
      loading: false
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

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleHistory = (url, method, body=null) => {
    let tempHistory = this.state.history;
    let contained = false;
    if (tempHistory.length > 0) {
      tempHistory.forEach(item => {
        if (item.url === url && item.method === method) {
          contained = true;
          // console.log('we already have this', this.state.history, tempHistory, contained);
          return;
        }
      });
    }
    !contained && tempHistory.push({ method, url, body });
    !contained && console.log('YES WE ABSOLUTELY DO already have this');
    // this.setState({ history: [...this.state.history, { method, url, body }] });
    this.setState({ history: tempHistory });
    if(!localStorage.getItem('FizzoKey')) {
      localStorage.setItem('FizzoKey', JSON.stringify(this.state.history));
    } else {
      let newStorageArray = [];
      newStorageArray = JSON.parse(localStorage.getItem('FizzoKey'));
      let contained2 = false;
      if (newStorageArray.length > 0) {
        newStorageArray.forEach(item => {
          if (item.url === url && item.method === method) {
            contained2 = true;
            console.log('we already have this in local STORAGE !!!', newStorageArray, contained2);
            return;
          }
        });
      }
      !contained2 && newStorageArray.push({ method, url, body });
      !contained2 && console.log('YES WE ABSOLUTELY DO already have this in local STORAGE');
      // newStorageArray.push({ method, url, body});
      // (newStorageArray.includes((method === method) && (url === url))) ? null : newStorageArray.push({ method, url, body});
      // console.log('and here is the old storage mmmmmm', newStorageArray);
      localStorage.setItem('FizzoKey', JSON.stringify(newStorageArray));
      this.setState({historyFromStorage: newStorageArray});
      // console.log('HERE IS history from STORAGE !!!!!! OBJ !!!!', this.state.historyFromStorage);

    }
  }
  loadHistory = async (e) => {
    console.log('HERE IS YOUR HISTORY DATA, OK', e.target.innerHTML);
    let tempArr = e.target.innerHTML.split(' - ');
    await this.setState({ method: tempArr[0], url: tempArr[1] });
  }
  render() {
    // console.log('HERE IS HISTORY AFTER', this.state.history);
    // console.log('HERE IS HISTORY FROM STORAGE', this.state.historyFromStorage);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Form handleChange={this.handleChange} handleClick={this.handleClick} handleClick2={this.handleClick2} method={this.state.method} url={this.state.url} show={this.state.show} methodClass={this.state.methodClass} handler={this.handleForm} secondaryInput={this.state.secondaryInput} handleHistory={this.handleHistory} loading={this.state.loading} toggleLoading={this.toggleLoading}/>
            <Results url={this.state.url} method={this.state.method} body={this.state.bodyFromFunction} results={this.state.results} handleHistory={this.handleHistory} loading={this.state.loading} toggleLoading={this.toggleLoading}/>
          </Route>
          <Route path="/history">
            <History loadHistory={this.loadHistory} history={this.state.history} >
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
