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
      url: '',
      method: 'GET',
      show: false,
      methodClass: '',
      results: [],
      headersFromFunction:'',
      bodyFromFunction: '',
      headers: {},
      status: '',
      error:'',
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
    await this.setState({ bodyFromFunction, results: [] });
  }

  handleClick2 = async e => {
    e.preventDefault();
    console.log('HERE IS THE BUTTON VALUE OF method========>>>>>>>>', e.target.value);
    let method = e.target.value;
    let methodClass = e.target.className;
    await this.setState({ method, methodClass });
    // let btnArr = [btn1, btn2, btn3, btn4];
    // btnArr.map(each => {

    // })
  }

  handleForm = (results) => {
    this.setState({ results: results.data, headers: results.headers, status: results.status });
  }

  handleError = (e) => {
    this.setState({error: e});
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
          console.log('we already have this SHIT', this.state.history, tempHistory, contained);
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
      // console.log('and here is the old storage mmmmmm', newStorageArray);
      localStorage.setItem('FizzoKey', JSON.stringify(newStorageArray));
      this.setState({historyFromStorage: newStorageArray, url: ''});
      // console.log('HERE IS history from STORAGE !!!!!! OBJ !!!!', this.state.historyFromStorage);

    }
  }
  loadHistory = async (e) => {
    // console.log('HERE IS YOUR HISTORY DATA, OK', e.target.innerHTML);
    let tempArr = e.target.innerHTML.split(' - ');
    await this.setState({ method: tempArr[0], url: tempArr[1], results: [] });
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Form handleChange={this.handleChange} handleClick={this.handleClick} handleClick2={this.handleClick2} method={this.state.method} url={this.state.url} show={this.state.show} methodClass={this.state.methodClass} handler={this.handleForm} secondaryInput={this.state.secondaryInput} handleHistory={this.handleHistory} loading={this.state.loading} toggleLoading={this.toggleLoading} handleError={this.handleError} formFromHistory={this.state.url}/>
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
