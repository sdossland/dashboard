/**
 * Created by sophia on 6/7/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import * as api from './apiHelper';

class CompanyListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      loaded: false
    }
  }
  componentDidMount() {
    api.getAllCompanies().then((companies) => {
      this.setState({ companies, loaded: true })
    });
  }
  render() {
    var companyList = this.state.companies.map((company) => {
        return (
          <Link to={`/company/${company._id}`} key={company._id}>
            <p className="companyListName">{company.name}</p>
          </Link>
        )
    });

    return this.state.loaded ? (
      <div>
        <p className="companyTitle">Companies</p>
        <hr />
        <div className="companyListing">
          {companyList}
        </div>
      </div>
    ) : <div>LOADING...</div>
  }
}

export default CompanyListing;