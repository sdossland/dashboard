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

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <p className="dashboardTitle">DASHBOARD</p>
        </div>
        <div className="app">
          <div className="left-column" /*Col md={8} sm={12}*/>
            <Router>
              <div>
                <Route exact path="/" render={() => <Redirect to="/company"/>} />
                <Route exact path="/company" component={CompanyListing} />
                <Route exact path="/company/:companyId" render={
                  props =>
                    <Company
                      companyId={props.match.params.companyId}
                      history={props.history}
                    />
                  }
                />
              </div>
            </Router>
          </div>
          <div className="right-column" /*Col md={4} sm={12}*/ >
            <NewCompany />
            <NewPerson />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
