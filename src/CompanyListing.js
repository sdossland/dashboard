/**
 * Created by sophia on 6/7/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';

class CompanyListing extends React.Component {
  render() {
    console.log('rendered!');
    var companyList = this.props.data.map((company, key) => {
        return (
          <Link to={`/company/${key}`} key={key}>
            <p>{company.companyName}</p>
          </Link>
          //<Company key={key} company={company} deleteCompany={this.props.getDeleteCompany(key)} /*onClickHandler={this.onClickHandler}*/ />
        )
    });

    return (
      <div>
        <p className="dashboardTitle">Companies</p>
        <hr />
        <br />
        <div className="companyListing">
          {companyList}
        </div>
      </div>
    )
  }
}

export default CompanyListing;