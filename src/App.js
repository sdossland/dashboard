import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import CompanyListing from './CompanyListing';
import NewCompany from './NewCompany';
import Company from './Company';
import NewPerson from './NewPerson';
import './App.css';

//const { Row, Col } = require('react-flexgrid');

var companies = [{
  companyName: 'Apple',
  companyAddress: '789 Space Dr, Cupertino, CA 12345',
  companyRevenue: '300000',
  companyPhoneNum: '(555)555-5555'
}, {
  companyName: 'Kodak',
  companyAddress: '456 South St, Rochester, NY 12345',
  companyRevenue: '200000',
  companyPhoneNum: '(555)555-5678'
}, {
  companyName: 'Xerox',
  companyAddress: '123 Main St, Rochester, NY 12345',
  companyRevenue: '100000',
  companyPhoneNum: '(555)555-1234'
}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: companies
    }
  }
  addCompany = (company, callback) => {
    var data = this.state.data.slice();
    data.push(company);
    this.setState({ data }, callback);
  };
  getDeleteCompany = (key) => () => {
    var data = this.state.data.slice();
    data.splice(key, 1);
    this.setState({
      data: data
    });
  };
  getEditCompany = (key) => (newCompany, callback) => {
    var data = this.state.data.slice();
    data[key] = newCompany;
    this.setState({ data }, callback);
  };
  render() {
    return (
      <div>
        {/*<div className="App-header">*/}
          {/*<p className="dashboardTitle">Dashboard</p>*/}
        {/*</div>*/}
        <div className="app">
          <div className="left-column" /*Col md={8} sm={12}*/>
            <Router>
              <div>
                <Route exact path="/" render={() => <Redirect to="/company"/>} />
                <Route exact path="/company" render={() => <CompanyListing data={this.state.data} getDeleteCompany={this.getDeleteCompany} />} />
                <Route exact path="/company/:key" render={props => <Company data={this.state.data[props.match.params.key]} deleteCompany={this.getDeleteCompany(props.match.params.key)} editCompany={this.getEditCompany(props.match.params.key)} history={props.history} />} />
              </div>
            </Router>
          </div>
          <div className="right-column" /*Col md={4} sm={12}*/ >
            <NewCompany addCompany={this.addCompany} />
            <NewPerson data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
