import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReactJson from 'react-json-view';
import { If, Then, Else } from 'react-if';
// let Loader = require('react-loaders').Loader;
import './scss/Results.scss';
import './scss/Form.scss';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="resultsContainer">
        <If condition={this.props.loading}>
          <Then>
            <Modal show={this.props.loading} onHide={this.props.toggleLoading} >
              <Modal.Dialog>
                <Modal.Body>
                  <Card style={{ width: '25rem'}}>
                    <Card.Img src={'https://bestcityscape.com/wp-content/uploads/2019/03/Santorini-skyline-night-90481.jpg'} />
                    <Card.Body>
                      <Card.Title>thank you for your patience</Card.Title>
                      <Card.Text>please close the modal to see your results</Card.Text>
                    </Card.Body>
                  </Card>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.props.toggleLoading}>
                    close
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal>
          </Then>

          <Else>
            <If condition={Object.keys(this.props.results).length > 0}>
              <Then>
                <ReactJson src={this.props.results} theme="summerfruit:inverted"/>
              </Then>
            </If>
          </Else>
        </If>
      </div>
    );
  }
}

export default Results;

//               <Loader type="ball-triangle-path" active />

